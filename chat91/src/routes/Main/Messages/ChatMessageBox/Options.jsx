import styled from 'styled-components';
import {OptionsCover} from 'components/Block';


const Options = styled(OptionsCover)`
    background-color: rgba(128, 128, 128, 0.2);
	${({theme: {messageBox}, myMessage}) => {
	return myMessage ? messageBox.myMessageBox.options : messageBox.responseMessageBox.options;
}}
	
`;
export default Options;
