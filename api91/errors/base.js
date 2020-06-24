const { getLang } = require('../utils');

const base = (err) => {
	return {
		message: getLang(err.message),
	};
};

module.exports = base;
