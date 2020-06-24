import axios from 'axios';

const onSubmitRegister = async (e, history) => {
	e.preventDefault();

	const { name, email, password, confirm_password } = e.currentTarget.elements;

	if (email && password && name && confirm_password) {
		try {
			const response = await axios.post('http://127.0.0.1:4444/users/', {
				name: name.value,
				email: email.value,
				password: password.value,
				confirm_password: confirm_password.value,
			});
			console.log(response);
			history.push('/login')
		}
		catch (err) {
		}
	}
};

export default onSubmitRegister;
