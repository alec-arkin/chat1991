
const number = (value = 0) => {
	value = parseInt(value);

	if (isNaN(value)) {
		throw new Error('isNotNumber');
	}
	else if (value.length <= 0) {
		throw new Error('isNotCorrect');
	}
	else if (value.length > 999999999) {
		throw new Error('TooBig');
	}
	return value;
};

module.exports = number;
