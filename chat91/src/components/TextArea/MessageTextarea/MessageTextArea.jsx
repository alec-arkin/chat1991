import styled from 'styled-components';
import TextArea from '../TextArea';

const MessageTextArea = styled(TextArea)`
	  resize: none;
	  background:none;
      flex-grow: 1;
      font-size: 1.2rem;
      height: 1.2em;
      overflow: hidden;
      padding-right: 20px;
      padding-left: 20px;
      ${({theme: {colors}}) => {
	return `
        color: ${colors.fontColor};  
        &::placeholder{
        color: ${colors.fontColor};  
        }     
    `;
}}      
`;

export default MessageTextArea;
