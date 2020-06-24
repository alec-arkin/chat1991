import axios from 'axios';

const login = async (history, email, password) => {
	try {
		const splitTokens = document.cookie.split(';');
		let queryString = '';

		if (email && password) {
			queryString = `?email=${email}&password=${password}`;
		}
		else if (splitTokens[1]) {
			const accessToken = splitTokens[0].split('accessToken=')[1];
			const refreshToken = splitTokens[1].split('refreshToken=')[1];

			queryString = `?accessToken=${accessToken}&refreshToken=${refreshToken}`;
		}

		const responses = await axios.get(`http://127.0.0.1:4444/login${queryString}`);
		const { accessToken, refreshToken } = responses.data || {};

		document.cookie = `accessToken=${accessToken}`;
		document.cookie = `refreshToken=${refreshToken}`;

		history.push('/');
	}
	catch (err) {
		console.log('err', err);
	}
};

export default login;
