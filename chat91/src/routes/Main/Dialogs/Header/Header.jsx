import React from 'react';
import styled from 'styled-components';
import  ChatHeaderWrapper  from 'components/ChatHeader';
import { MenuButton } from 'components/Button';
import { Search as SearchInput } from 'components/Input';


const Wrapper = styled(ChatHeaderWrapper)`
	margin-left: 10px;
	margin-right: 10px;
	padding: 20px;	 
`;
const Header = () => {
	return <Wrapper>
			<MenuButton/>
			<SearchInput/>
		</Wrapper>

};
export default React.memo(Header);
