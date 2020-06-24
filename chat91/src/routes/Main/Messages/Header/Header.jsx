import React, {useState, useRef, useEffect} from 'react';
import {BriefTextBlock, OptionsCover} from 'components/Block';
import ChatHeaderWrapper from 'components/ChatHeader';
import {Avatar} from 'components/Image';
import {Headline3, Text} from 'components/Text';
import {CameraButton} from 'components/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck, faPencilAlt, faTimes, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {IconButton} from 'components/Button';
import { Upload as FormUpload } from 'components/Form';
import styled from 'styled-components';

const Wrapper = styled(ChatHeaderWrapper)`	
position: relative;
    
`;
const Header = ({dialog}) => {
	const [showOptions, setShowOptions] = useState(false);
	const [modeEdit, setModeEdit] = useState(false);
	const [textValue, setTextValue] = useState(dialog.name);
	const [updatedValue, setUpdatedValue] = useState(dialog.name);
	const messageEditing = useRef(null);

	useEffect(() => {
		if (updatedValue !== dialog.name) {
			//console.log('update function  ' + updatedValue);
		}
	}, [updatedValue, dialog.name]);

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
		await (setTextValue(messageEditing.current.innerText));
		setTextValue(dialog.name);
		setModeEdit(false);
		setShowOptions(false);
	};

	const onKeyDown = (e) => {
		if ((e.key === 'Enter') && modeEdit) {
			updateMessage(e);
		}
		if ((e.key === 'Escape') && modeEdit) {
			cancelEdit(e);
		}
	};


	return <Wrapper>
		<FormUpload 
			autoSubmit
			action="http://127.0.0.1:4444/upload"
			width="84px" 
			height="84px">
			<Avatar single/>
		</FormUpload>
		<BriefTextBlock onClick={() => setShowOptions(true)}>
			<Headline3
				contentEditable={modeEdit}
				suppressContentEditableWarning
				tabIndex="1"
				ref={messageEditing}
				onKeyDown={onKeyDown}>
				{textValue}
			</Headline3>
			<Text>
				online
			</Text>
		</BriefTextBlock>
		<CameraButton/>
		{showOptions && (<OptionsCover>
			<IconButton onClick={modeEdit
				? cancelEdit
				: closeOptions}>
				<FontAwesomeIcon icon={faTimes}/>
			</IconButton>
			{modeEdit
				? <IconButton>
					<FontAwesomeIcon icon={faCheck}
									 onClick={updateMessage}/>
				</IconButton>
				: <React.Fragment>
					<IconButton>
						<FontAwesomeIcon icon={faPencilAlt}
										 onClick={messageEdit}/>
					</IconButton>
					<IconButton>
						<FontAwesomeIcon icon={faTrashAlt}/>
					</IconButton>
				</React.Fragment>
			}
		</OptionsCover>)
		}

	</Wrapper>
};

export default React.memo(Header);
