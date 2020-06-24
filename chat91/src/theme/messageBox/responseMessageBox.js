import * as colors from './../colors.js'

export const messageBox = `
background-color: ${colors.lightPurple};
align-self: flex-start;
padding-right: 44px;
&::after{
	position: absolute;
	content: '';
	width: 0;
	height: 0;
	border: 9px solid transparent;
	left: -9px;
	margin-top: -9px;
	margin-left: -9px;
	top: 25px;
	border-right-color: ${colors.lightPurple};
}
 `;

export const time = `
    flex-direction: row;
    left: 0;
`;

export const options = `
	right: 0;
 	border-radius: 0 6px 6px 0;
`;

