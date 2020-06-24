import React from 'react';
import styled from 'styled-components';
import IconButton from '../IconButton.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons'



const Wrapper = styled(IconButton)`
	width: 108px;
    height: 100%;
	border-left: 1px solid rgba(120, 109, 134, 0.2);
	font-size: 1.4rem;
	margin-left: auto;
`;
const CameraButton = () => (
    <Wrapper>
        <FontAwesomeIcon icon={faVideo}/>
    </Wrapper>
);
export default CameraButton;
