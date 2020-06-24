import React from 'react';
import styled from 'styled-components';
import IconButton from '../IconButton.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip } from '@fortawesome/free-solid-svg-icons'


const Wrapper = styled(IconButton)`
transform: rotate(315deg);
font-size: 1.6rem;
`;
const FileUploadButton = () => (
    <Wrapper>
        <FontAwesomeIcon icon={faPaperclip}/>
    </Wrapper>
);
export default FileUploadButton;
