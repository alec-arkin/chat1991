import React from 'react';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';
import {
	Password as InputPassword,
	Email as InputEmail,
	Name as InputName
} from 'components/Input';
import {Save as ButtonSave} from 'components/Button';
import Form from '../Form';
import onSubmitLoginFunc from './onSubmitLogin.js';
import onSubmitRegisterFunc from './onSubmitRegister.js';

const Wrapper = styled(Form)`
	flex-direction: column;
	width: 440px;
`;

const Login = ({register, history}) => {
	const onSubmit = React.useCallback((e) => {
		register
			? onSubmitRegisterFunc(e, history)
			: onSubmitLoginFunc(e, history)
	}, [
		history,
		register
	]);

	return <Wrapper onSubmit={onSubmit}>
		{register
			? <InputName
				name="name"
				placeholder="Введите имя"/>
			: <React.Fragment/>}
		<InputEmail name="email"/>
		<InputPassword name="password"/>
		{register
			? <InputPassword
				name="confirm_password"
				placeholder="Повторите пароль"/>
			: <React.Fragment/>}
		<ButtonSave type="submit">
			{register ? 'Зарегистрироваться' : 'Войти'}
		</ButtonSave>
	</Wrapper>;
};

export default React.memo(withRouter(Login));
