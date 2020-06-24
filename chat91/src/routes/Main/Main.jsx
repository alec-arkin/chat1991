import React from 'react';
import {ChatPageWrapper} from 'components/Block';
import Messages from './Messages';
import Dialogs from './Dialogs';




const Main = () => {
	return 	<ChatPageWrapper>
			<Dialogs>
				<Messages/>
			</Dialogs>
		</ChatPageWrapper>

};

export default React.memo(Main);

