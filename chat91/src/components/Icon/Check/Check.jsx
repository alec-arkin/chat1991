import styled from "styled-components";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.span`
    
	${({theme: {colors}}) => {
    return `color: ${colors.fontColor};
    font-size: 0.6rem;
 `
}}
`;
const Check = () => (
    <Wrapper>
        <FontAwesomeIcon icon={faCheck}/>
    </Wrapper>
);
export default Check;
