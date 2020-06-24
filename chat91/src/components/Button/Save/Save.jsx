import React from 'react';
import styled from 'styled-components';
import Button from '../Button.jsx';

const Wrapper = styled(Button)`
	font-weight: bold;
	outline: transparent;
	transition: all .1s linear;
	padding: 10px 0;
	border-radius: 15px;
	margin-top: 20px;
	

	${({ tablet, mobile, theme }) => {
		const type = tablet
			? 'primaryTablet' 
			: mobile
				? 'primaryMobile'
				: 'primaryDesktop';

		return `
			width: 350px;
			font-size: ${theme.buttons[type].fontSize};
			line-height: ${theme.buttons[type].lineHeight};
			color: ${theme.colors.white};
			background: ${theme.colors.blue};

			&:hover,
			&:focus {
				color: ${theme.colors.grey};
			}
		`
	}}
	
	&:hover,
	&:focus {
		box-shadow: 0px 0px 22px 0px rgba(50, 50, 50, 0.75);
		-webkit-box-shadow: 0px 0px 22px 0px rgba(50, 50, 50, 0.75);
		-moz-box-shadow: 0px 0px 22px 0px rgba(50, 50, 50, 0.75);
		box-shadow: 0px 0px 22px 0px rgba(50, 50, 50, 0.75);
	}
	&:active {
		transform: translate(2px, 3px);
	}
`;

let Save = ({ children, ...props }) => {
	return <Wrapper { ...props }>
		{children}
	</Wrapper>;
};

Save = React.memo(Save);
Save.defaultProps = {
	children: 'Сохранить',
};

export default Save;
