import styled from 'styled-components';
import Input from '../Input.jsx';

const Secondary = styled(Input)`
	${({theme:{inputs:{secondary}}}) => `
	    min-width: 220px;
		width: ${secondary.width};
		border-radius: ${secondary.borderRadius};
		border: ${secondary.border};
		padding: ${secondary.padding};
		font-size: ${secondary.fontSize};
		margin-bottom: ${secondary.marginBottom};
		&:hover,
		&:focus {
			-webkit-box-shadow: -1px -1px 22px 0px rgba(104, 104, 104, 0.75);
			-moz-box-shadow: -1px -1px 22px 0px rgba(104, 104, 104, 0.75);
			box-shadow: -1px -1px 22px 0px rgba(104, 104, 104, 0.75);
			border-color: #eee;
		}

		&:first-of-type {
			margin-top: 20px;
		}`}`;

export default Secondary;
