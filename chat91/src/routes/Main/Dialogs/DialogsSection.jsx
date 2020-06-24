import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Block from 'components/Block';
import ContentWrapper from './ContentWrapper';
import Scroll from 'components/Scroll';
import DialogsItem from './DialogsItem';
import Header from './Header';
import {
	dialogs as fetchDialogs,
} from 'fetches';

export const Dialogs = React.createContext();
const Wrapper = styled(Block)`
   border-right: 2px solid rgba(120, 109, 134, 0.2);   
   background-color: ${({theme:{colors}}) => colors.secondaryPurple}; 
`;

const DialogsSection = ({ history, children }) => {
	const [ state, setState ] = React.useState(() => ({
		data: [],
	}));

	// onMount
	React.useEffect(() => {
		fetchDialogs(history, setState);
	}, [
		history,
		setState,
	]);

	return <React.Fragment>
		<Wrapper>
			<Header/>
			<ContentWrapper>
				<Scroll>
				{state.data.map(({ name, body = '' }, i) => {
					return <DialogsItem
						key={i}
						name={name}
						body={body} />
				})}
				</Scroll>
			</ContentWrapper>
		</Wrapper>
		{state.data.length > 0
			? <Dialogs.Provider value={state.data}>
				{children}
			</Dialogs.Provider>
			: <React.Fragment />}
	</React.Fragment>;
};

export default React.memo(withRouter(DialogsSection));
