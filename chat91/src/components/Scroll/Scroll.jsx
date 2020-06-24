import styled from 'styled-components';
import Block from 'components/Block';

const Scroll = styled(Block)`
overflow-y: scroll;
padding-top: 20px;
scrollbar-color: rgb(43,128,255) transparent;
scrollbar-width: thin;

height: 100%;
width: 100%;

&::-webkit-scrollbar {
    width: 3px;
    background-color: transparent;
    display: none;
}  
&::-webkit-scrollbar-thumb {
background-color: rgb(43,128,255);
border-top: 20px solid rgb(65,68,103);
clip-path: content-box;
}
&:hover{
&::-webkit-scrollbar {
display: block;
}
}
`;
export default Scroll;
