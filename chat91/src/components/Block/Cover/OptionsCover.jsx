import styled, {keyframes} from 'styled-components';
import Cover  from './Cover.jsx';

const grow = keyframes`
  from {
    width: 0;
  }

  to {
    width: 36px;
  }
`;


const OptionsCover = styled(Cover)`
    flex-wrap: nowrap;
    flex-direction: column;
	justify-content: space-around;	
	animation: ${grow} 0.2s linear;			
	width: 36px;
		
		& button{
    	margin: 8px;	   	
       }
`;

export default OptionsCover;
