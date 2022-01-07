import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Color, ColorTheme, Shadow } from '../shared/variables';

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

const Sizes = {
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

const borderRadiusDefault = 8;
const BorderRadius = {
	none: 0,
	sm: borderRadiusDefault * 1 + 'px',
	md: borderRadiusDefault * 2 + 'px',
	lg: borderRadiusDefault * 3 + 'px',
	xl: borderRadiusDefault * 4 + 'px',
	round: '50%',
};

export const BtnDefault = ({ label, theme, size, radius, ...props }) => {
	const bgColor = ColorTheme[theme];
	const fontSize = Sizes[size].fontSize;
	const borderRadius = BorderRadius[radius];
	console.log(borderRadius);
	return (
		<Btn
			type='button'
			bgColor={bgColor}
			fontSize={fontSize}
			borderRadius={borderRadius}
			{...props}
		>
			{label}
		</Btn>
	);
};

export const BtnOutline = ({ label, theme, size, radius, ...props }) => {
	const borderColor = ColorTheme[theme];
	const color = ColorTheme[theme];
	const fontSize = Sizes[size].fontSize;
	const borderRadius = BorderRadius[radius];
	return (
		<Btn
			type='button'
			borderColor={borderColor}
			color={color}
			fontSize={fontSize}
			borderRadius={borderRadius}
			{...props}
		>
			{label}
		</Btn>
	);
};

export const BtnText = ({ label, theme, size, radius, ...props }) => {
	const color = ColorTheme[theme];
	const fontSize = Sizes[size].fontSize;
	const borderRadius = BorderRadius[radius];
	return (
		<Btn
			type='button'
			color={color}
			fontSize={fontSize}
			borderRadius={borderRadius}
			{...props}
		>
			{label}
		</Btn>
	);
};

BtnDefault.propTypes = {
	theme: PropTypes.oneOf([
		'primary',
		'secondary',
		'success',
		'danger',
		'warning',
		'accent',
	]),
	size: PropTypes.oneOf(['sm', 'md', 'lg']),
	label: PropTypes.string.isRequired,
	radius: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl', 'round']),
	onClick: PropTypes.func,
};
