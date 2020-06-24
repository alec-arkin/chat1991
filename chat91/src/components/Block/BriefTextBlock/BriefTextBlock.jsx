import styled from 'styled-components';
import {Primary} from 'components/Block';

const BriefTextBlock = styled(Primary)`
margin-left: 40px;
margin-right: 40px;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;

& p{
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
    ${({theme: {colors}}) => {
    return `color: ${colors.fontColor};
`
}}
}
`;

export default BriefTextBlock;
