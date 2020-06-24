import styled from 'styled-components';
import PageWrapper from './PageWrapper.jsx';

const ChatPageWrapper = styled(PageWrapper)`
	& > div:first-child{
	width: 40%;
	}
	& > div:last-child{
	width: 60%;
	}
`;

export default ChatPageWrapper;
