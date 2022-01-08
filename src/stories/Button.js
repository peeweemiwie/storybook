import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Color, ColorTheme, Shadow } from '../shared/variables';
import { themeArray } from '../shared/arrays';

export const Btn = styled.button`
	border: 1px solid transparent;
	border-color: ${({ borderColor }) => borderColor || 'transparent'};
	border-radius: ${({ borderRadius }) => borderRadius || 0};
	background-color: ${({ bgColor }) => bgColor || 'transparent'};
	color: ${({ color }) => color || Color.white};
	cursor: pointer;
	font-size: ${({ fontSize }) => fontSize || '1.2rem'};
	padding: 0.5em 1em;
	transition: transform 200ms ease-in;
	&:hover {
		box-shadow: ${Shadow.shadow1};
		transform: scale(1.05);
	}
`;

export const Sizes = {
	sm: {
		fontSize: '0.8rem',
	},
	md: {
		fontSize: '1rem',
	},
	lg: {
		fontSize: '1.2rem',
	},
};
export const SizeArray = Object.keys(Sizes);

const borderRadiusDefault = 8;
export const BorderRadius = {
	none: 0,
	sm: borderRadiusDefault * 1 + 'px',
	md: borderRadiusDefault * 2 + 'px',
	lg: borderRadiusDefault * 3 + 'px',
	xl: borderRadiusDefault * 4 + 'px',
	round: '50%',
};
export const BorderRadiusArray = Object.keys(BorderRadius);

export const BtnFilled = ({ label, theme, size, radius, ...props }) => {
	return (
		<Btn
			type='button'
			bgColor={ColorTheme[theme]}
			fontSize={Sizes[size].fontSize}
			borderRadius={BorderRadius[radius]}
			label={label}
			{...props}
		>
			{label}
		</Btn>
	);
};

export const BtnOutline = ({ label, theme, size, radius, ...props }) => {
	return (
		<Btn
			type='button'
			borderColor={ColorTheme[theme]}
			color={ColorTheme[theme]}
			fontSize={Sizes[size].fontSize}
			borderRadius={BorderRadius[radius]}
			label={label}
			{...props}
		>
			{label}
		</Btn>
	);
};

export const BtnText = ({ label, theme, size, radius, ...props }) => {
	return (
		<Btn
			type='button'
			color={ColorTheme[theme]}
			fontSize={Sizes[size].fontSize}
			borderRadius={BorderRadius[radius]}
			label={label}
			{...props}
		>
			{label}
		</Btn>
	);
};

BtnFilled.propTypes = {
	theme: PropTypes.oneOf(themeArray),
	size: PropTypes.oneOf(SizeArray),
	label: PropTypes.string.isRequired,
	radius: PropTypes.oneOf(BorderRadiusArray),
	onClick: PropTypes.func,
};
