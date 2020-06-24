import * as colors from './../colors.js'

export const messageBox = `
background-color: ${colors.transparentLightPurple};
padding-left: 44px;
align-self: flex-end;
&::after,
&::before{
	position: absolute;
	content: '';
	width: 0;
	height: 0;
	border: 9px solid transparent;
	right: 1px;
	border-right: 0;
	margin-top: -9px;
	margin-right: -9px;	
	top: 25px;
	border-left-color: ${colors.transparentLightPurple};
}
&::before{
 	margin-right: -10px;
	border-left-color: ${colors.lightPurple};
}
`;

export const time = `
	flex-direction: row-reverse;
 	right: 0;
`;

export const options = `
	left: 0;
 	border-radius: 6px 0 0 6px;
`;
