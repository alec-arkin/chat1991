import React from 'react';
import styled from 'styled-components';
import {Primary as PrimaryForm} from 'components/Form';
import {FileUploadButton, MessageSendButton, IconButton} from 'components/Button';
import {MessageTextArea} from 'components/TextArea';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {far} from '@fortawesome/free-regular-svg-icons';
import onSubmitFunc from './onSubmit.js';


const Wrapper = styled(PrimaryForm)`
    min-height: 90px;
    border-top: 1px solid rgba(120, 109, 134, 0.2);
 
     & button{
     margin-right: 20px;
     &:last-of-type{
     margin-right: 0;
     margin-left: 20px;
     }
    }
    & textarea{
    font-size: 1.2rem;   
    padding-left: 20px;
    margin-right: 20px;
     ${({theme: {colors}}) => {
	return `
        color: ${colors.fontColor};  
        &::placeholder{
        color: ${colors.fontColor};  
        }     
    `;
}}  
    }
`;

const Footer = ({dialogId, action}) => {
	const onSubmit = React.useCallback((...rest) => onSubmitFunc(...rest, dialogId, action), [
		dialogId,
		action,
	]);

	return <Wrapper onSubmit={onSubmit}>
		<FileUploadButton/>
		<MessageTextArea
			name="body"
			placeholder="Type your message..."/>
		<IconButton>
			<FontAwesomeIcon icon={far.faSmile} size='2x'/>
		</IconButton>
		<MessageSendButton type="submit"/>
	</Wrapper>;
};

export default React.memo(Footer);
