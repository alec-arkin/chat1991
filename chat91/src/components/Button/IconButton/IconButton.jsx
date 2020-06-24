import styled from 'styled-components';
import Button from '../Button.jsx';

const IconButton = styled(Button)`
	background: transparent;
	padding: 0;
	position: relative;
	flex-shrink: 0;
	
	 ${({theme: {icons: {iconPrimary}}}) => {
    return `
			color: ${iconPrimary.color};
			&:hover{
			color: ${iconPrimary.hoverColor};
			}			
				`
}}
	
	& svg{
	position: absolute;
	top: 50%;    
    left: 50%;
    transform: translate(-50%, -50%);
   	}
`;

export default IconButton;
