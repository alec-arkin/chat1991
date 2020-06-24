import styled from 'styled-components';
import Primary from '../Primary';



const Secondary = styled(Primary)`
    background-color: rgba(121, 121, 132, .4);	
	justify-content: center;
    ${({tablet, mobile, theme}) => {
	const type = (tablet || mobile)
		? 'primaryMobile'
		: 'primaryDesktop';

	return `
    flex-direction: ${theme.blocks[type].flexDirection};
    padding: ${theme.blocks[type].padding};
        `
}
	}

`;


export default(Secondary);
