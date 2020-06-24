import React from 'react';
import Secondary from '../Secondary';

let Name = (props) => {
	return <Secondary { ...props } type="text" />;
};

Name = React.memo(Name);
Name.defaultProps = {
	placeholder: 'Введите имя',
};

export default Name;
