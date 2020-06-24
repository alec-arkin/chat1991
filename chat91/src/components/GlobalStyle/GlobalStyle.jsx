import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
box-sizing: border-box;
margin: 0;
padding: 0;
}
  html {
  //height: 100%;
   }
  body {
    height: 100%;
    margin: 0;
    background-color: #E7EBF0;
    color: ${props => props.theme.colors.white};  
    font-family: Roboto  sans-serif;
    font-weight: 300;
    font-size: 18px;   
      }
`;
export default GlobalStyle;
