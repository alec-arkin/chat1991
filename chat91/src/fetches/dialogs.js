import axios from 'axios';
import login from './login.js';

const dialogs = async (history, action = () => {}) => {
	try {
		const split = document.cookie.split(';');
		const accessToken = split[0].split('accessToken=')[1];
		const response = await axios.get(`http://127.0.0.1:4444/dialogs?accessToken=${accessToken}`);

		action((state) => {
			return {
				...state,
				data: response.data,
			};
		});
	}
	catch (err) {
		if (err.response.status === 401) {
			await login(history);
			await dialogs(history, action);
		}
	}
};

export default dialogs;
