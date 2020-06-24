import styled from 'styled-components';
import {Flex} from 'components/Block';


const Time = styled(Flex)`	  	
	    display: flex;
	    flex-wrap: nowrap;
	    justify-content: space-between;
	    align-items: baseline;
	    width: 60px;	    
	    overflow: hidden;
		text-transform: uppercase;		
		position: absolute;
        bottom: -30px;       
		color: ${({theme: {colors}}) => colors.fontColor}; 
		${({theme: {messageBox}, myMessage}) => {
	    return myMessage ? messageBox.myMessageBox.time : messageBox.responseMessageBox.time;
}}
	
`;
export default Time;
