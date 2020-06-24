
const string = (value = '') => {
	if (typeof value !== 'string') {
		throw new Error('isNotString');
	}
	else if (value.length <= 0) {
		throw new Error('isEmpty');
	}
	else if (value.length > 255) {
		throw new Error('lengthIsMoreThen255');
	}
	return value;
};

module.exports = string;
