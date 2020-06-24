import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLocationArrow} from '@fortawesome/free-solid-svg-icons'
import IconButton from '../IconButton.jsx';


const Wrapper = styled(IconButton)`
		border-radius: 50%;
	${({theme: {icons: {sendArrow}}}) => {
	return `
    width: ${sendArrow.wrapperSize};
	height: ${sendArrow.wrapperSize};
    background-color: ${sendArrow.backgroundColor};
    font-size:  ${sendArrow.fontSize};
    transform: rotate(${sendArrow.rotate});
    & svg{
    color: ${sendArrow.color};
    }
    &:hover{
    background-color: ${sendArrow.hoverBackground};
    }
 `
}}
`;
const MessageSendButton = ({ ...props }) => (
	<Wrapper { ...props }>
		<FontAwesomeIcon icon={faLocationArrow}/>
	</Wrapper>
);
export default MessageSendButton;
