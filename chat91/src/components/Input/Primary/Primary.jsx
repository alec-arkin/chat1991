import styled from 'styled-components';
import Input from '../Input.jsx';

const Primary = styled(Input)`
      background-color: inherit;
      border:           none;
      
      color:            white;
      flex-grow: 1;
       &::-webkit-input-placeholder {
            color:   white;
            opacity: 1;         
        }
        &::-moz-placeholder {
            color:   white;
            opacity: 1;

        }
        &:-ms-input-placeholder {
            color:   white;           
            opacity: 1;
        }
        &:-moz-placeholder {
            color:   white;           
            opacity: 1;
        }
        &::placeholder {           
            opacity: 1;
            color: white;
        }
	`;

export default Primary;
