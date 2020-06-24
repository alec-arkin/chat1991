import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import IconButton from '../IconButton.jsx';


const Wrapper = styled(IconButton)`
	width: 48px;
	height: 48px;
	border-radius: 50%;
	
	${({theme: {icons}}) => {
    return `
			font-size: ${icons.hamburger.fontSize};
			border: 2px solid ${icons.hamburger.borderColor};
			&:hover{
			border-color: ${icons.iconPrimary.hoverColor};
			}
				`
}}
`;
const MenuButton = () => (
    <Wrapper>
        <FontAwesomeIcon icon={faBars}/>
    </Wrapper>
);
export default MenuButton;
