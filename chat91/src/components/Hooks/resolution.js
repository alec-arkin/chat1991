import {useEffect, useReducer} from 'react';
const useResolution = () => {
	const defaultProps = {
		mobile: false,
		tablet: false,
	};
	const resolutionReducer = (state, action) => {
		switch (action.type) {
			case 'TABLET':
				return {...state, mobile: false, tablet: true};

			case 'MOBILE':
				return {...state, mobile: true, tablet: false};

			case 'DESCTOP':
				return {...state, mobile: false, tablet: false};

			default:
				return state;
		}
	};
	const [state, dispatch] = useReducer(resolutionReducer, defaultProps );


	useEffect(() => {
		window.addEventListener('resize', (e) => {
			const width = e.currentTarget.innerWidth;
			const tabletFlag = width < 780 && width > 420;
			const mobileFlag = width < 420;

			dispatch({
				type: tabletFlag
					? 'TABLET'
					: mobileFlag
						? 'MOBILE'
						: 'DESCTOP',
			});
		});
		window.dispatchEvent(new Event('resize'));
	}, []);
	return state;
};
export default (useResolution);
