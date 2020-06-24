import styled from 'styled-components';
import {Primary} from 'components/Block';

const ChatHeaderWrapper = styled(Primary)`
    height: 108px;
    border-bottom: 1px solid rgba(120, 109, 134, 0.2);
    flex-direction: row;
    flex-wrap: nowrap;
    padding-left: 30px;
    justify-content: flex-start;
`;
export default ChatHeaderWrapper;
