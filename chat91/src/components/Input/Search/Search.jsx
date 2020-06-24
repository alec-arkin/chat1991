import React from 'react';
import styled from 'styled-components';
import PrimaryInput from '../Primary';
import {Primary as PrimaryWrapper} from 'components/Block';
import {IconButton} from 'components/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';



const Wrapper = styled(PrimaryWrapper)`
flex-grow:       1;
justify-content: flex-start;
flex-wrap: nowrap;
margin-left:     20px;
padding-left:    30px;
padding-right:   30px;
border-radius:   40px;
height:          48px;
font-size:       1rem;
    & button{
    margin-right:    12px;
    }
    & input{
    flex-grow: 1;
    font-size: 1rem;
    }
${({theme: {colors}}) => {
	return `
			border: 2px solid ${colors.lightPurple};
			background-color: ${colors.primaryPurple};		
				`
}}

`;
const Search = () => (
	<Wrapper>
		<IconButton>
			<FontAwesomeIcon icon={faSearch}/>
		</IconButton>
		<PrimaryInput
			type="search"
			placeholder="Search"/>
	</Wrapper>
);

export default React.memo(Search);
