import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Block from "components/Block";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faTrashAlt,
  faTimes,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "components/Button";
import Check from "components/Icon";
import { timeFormatter } from "../helpers";
import { Text } from "components/Text";
import Time from "./Time.jsx";
import Options from "./Options.jsx";

const Wrapper = styled(Block)`
  box-sizing: border-box;
  border: 1px solid ${({ theme: { colors } }) => colors.lightPurple};
  overflow: visible;
  margin-bottom: 60px;
  max-width: 315px;
  border-radius: 6px;
  padding: 20px;
  position: relative;

  ${({ theme: { messageBox }, myMessage }) => {
    return myMessage
      ? messageBox.myMessageBox.messageBox
      : messageBox.responseMessageBox.messageBox;
  }}
`;

const ChatMessageBox = ({ item }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [modeEdit, setModeEdit] = useState(false);
  const [textValue, setTextValue] = useState(item.body);
  const [updatedValue, setUpdatedValue] = useState(item.body);
  const messageEditing = useRef(null);

  useEffect(() => {
    if (updatedValue !== item.body) {
      //console.log('update function  ' + updatedValue);
    }
  }, [updatedValue, item.body]);

  const messageEdit = (e) => {
    e.stopPropagation();
    setModeEdit(true);
    messageEditing.current.focus();
  };

  const updateMessage = (e) => {
    e.stopPropagation();
    setTextValue(messageEditing.current.innerText);
    setUpdatedValue(messageEditing.current.innerText);
    setModeEdit(false);
    setShowOptions(false);
  };

  const closeOptions = (e) => {
    e.stopPropagation();
    setShowOptions(false);
  };

  const cancelEdit = async (e) => {
    e.stopPropagation();
    await setTextValue(messageEditing.current.innerText);
    setTextValue(item.body);
    setModeEdit(false);
    setShowOptions(false);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && modeEdit) {
      updateMessage(e);
    }
    if (e.key === "Escape" && modeEdit) {
      cancelEdit(e);
    }
  };

  return (
    <Wrapper myMessage={!!item.me} onClick={() => setShowOptions(true)}>
      <Text
        contentEditable={modeEdit}
        suppressContentEditableWarning
        tabIndex="1"
        ref={messageEditing}
        onKeyDown={onKeyDown}
      >
        {textValue}
      </Text>
      <Time myMessage={!!item.me}>
        <Check />
        <span>{timeFormatter(item.createdAt)}</span>
      </Time>

      {showOptions && (
        <Options myMessage={!!item.me}>
          <IconButton onClick={modeEdit ? cancelEdit : closeOptions}>
            <FontAwesomeIcon icon={faTimes} />
          </IconButton>
          {modeEdit ? (
            <IconButton>
              <FontAwesomeIcon icon={faCheck} onClick={updateMessage} />
            </IconButton>
          ) : (
            <React.Fragment>
              <IconButton>
                <FontAwesomeIcon icon={faPencilAlt} onClick={messageEdit} />
              </IconButton>
              <IconButton>
                <FontAwesomeIcon icon={faTrashAlt} />
              </IconButton>
            </React.Fragment>
          )}
        </Options>
      )}
    </Wrapper>
  );
};
export default React.memo(ChatMessageBox);
