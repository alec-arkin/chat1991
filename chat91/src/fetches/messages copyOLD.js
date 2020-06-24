
const messages = async (body, action = () => {}) => {
	action((state) => {
		return {
			...state,
			data: Array.isArray(body)
				? body
				: [
					...state.data,
					body,
				],
		};
	});
};

export default messages;
