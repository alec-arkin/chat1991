import React from 'react';
import Secondary from '../Secondary';

let Email = (props) => {
	return <Secondary { ...props } type="email" />;
};

Email = React.memo(Email);
Email.defaultProps = {
	placeholder: 'Введите email',
};

export default Email;
