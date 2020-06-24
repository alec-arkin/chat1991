import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
	cursor: pointer;
	text-transform: uppercase;
	text-align: center;
	border: 1px solid transparent;
	outline: none!important;
	&:active,
	&:focus {
	outline: none!important;
	}
`;

let Button = ({ onClick, ...props }) => {
	return <Wrapper { ...props }
		onClick={(e) => {
			e.preventDefault();
			onClick(e);
		}} />;
};

Button = React.memo(Button);
Button.defaultProps = {
	onClick: () => {},
};

export default Button;
