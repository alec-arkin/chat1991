import styled from 'styled-components';
import Scroll from '../Scroll';

const DialogScroll = styled(Scroll)`
padding-right: 20px;
padding-left: 20px;
display: flex;
flex-direction: column;
flex-wrap: nowrap;
&::-webkit-scrollbar-thumb {
background-color: rgb(43,128,255);
border-top: 20px solid rgb(55,51,81);
}
`;
export default DialogScroll;
