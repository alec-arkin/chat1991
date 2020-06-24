import React from 'react';
import styled from 'styled-components';
import Block from 'components/Block';

const Wrapper = styled(Block)`
	${({ width, height }) => `
		width: ${width};
		height: ${height};
	`}

	& form {
		& > input {
			width: 100%;
			height: 100%;
			cursor: pointer;
		}
		position: absolute;
		width: inherit;
		height: inherit;
		overflow: hidden;
		z-index: 9;
		opacity: 0;
	}
`;

let Upload = ({ children, action, autoSubmit, onChange, width, height }) => {
	const onChangeLocal = React.useCallback((e) => {
		e.preventDefault();
		
		if (autoSubmit) {
			e.currentTarget.parentNode.submit();
		}

		return onChange(e);
	}, [
		autoSubmit,
		onChange,
	]);

	return <Wrapper width={width} height={height}>
		<form encType="multipart/form-data" method="post" action={action}>
	    	<input 
	    		type="file" 
	    		name="avatar"
	    		onChange={onChangeLocal} />
	    </form>
	    {children}
	</Wrapper>;
};

Upload = React.memo(Upload);
Upload.defaultProps = {
	autoSubmit: false,
	onChange: () => {},
};

export default Upload;
