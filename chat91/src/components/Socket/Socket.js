import io from 'socket.io-client';

let connection;
const socket = () => {
	return connection = connection
		? connection
		: io('ws://127.0.0.1:4445');
};

export default socket;
