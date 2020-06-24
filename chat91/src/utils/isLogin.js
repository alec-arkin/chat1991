
const isLogin = () => {
	return document.cookie.indexOf('accessToken=') !== -1 && document.cookie.indexOf('refreshToken=') !== -1;
};

export default isLogin;
