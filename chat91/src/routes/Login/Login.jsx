import React from 'react';
import { Secondary as BlockSecondary } from 'components/Block';
import { Login as FormLogin } from 'components/Form';

const Login = () => {
	return <>
		<BlockSecondary>
			<FormLogin />
		</BlockSecondary>
	</>
};

export default React.memo(Login);
