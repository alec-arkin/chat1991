import axios from 'axios';
import Socket from 'components/Socket';

const onSubmit = async (e, dialogId, action) => {
	e.preventDefault();

	const value = e.currentTarget.elements[1].value;
//	if (value) {
		const response = await axios.post('http://127.0.0.1:4444/messages/', {
			user_id: 2,
			dialog_id: dialogId,
			body: value,
			id: Socket().id,
		});

	action((currentState) => {
		return {
			...currentState,
			data: [
				...currentState.data,
				{
					...response.data,
					me: true,
				},
			]
		}
	});
//	}
};

export default onSubmit;

