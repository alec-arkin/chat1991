import React from 'react';
import Secondary from '../Secondary';

let Password = (props) => {
	return <Secondary { ...props } type="password" />;
};

Password = React.memo(Password);
Password.defaultProps = {
	placeholder: 'Введите пароль',
};

export default Password;
