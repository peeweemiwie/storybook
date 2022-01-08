import PropTypes from 'prop-types';
import { ColorTheme } from '../shared/variables';
import { themeArray } from '../shared/arrays';
import { StyledButton } from '../shared/btn.styled';

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
		<StyledButton
			type='button'
			bgColor={ColorTheme[theme]}
			fontSize={Sizes[size].fontSize}
			borderRadius={BorderRadius[radius]}
			label={label}
			{...props}
		>
			{label}
		</StyledButton>
	);
};

export const BtnOutline = ({ label, theme, size, radius, ...props }) => {
	return (
		<StyledButton
			type='button'
			borderColor={ColorTheme[theme]}
			color={ColorTheme[theme]}
			fontSize={Sizes[size].fontSize}
			borderRadius={BorderRadius[radius]}
			label={label}
			{...props}
		>
			{label}
		</StyledButton>
	);
};

export const BtnText = ({ label, theme, size, radius, ...props }) => {
	return (
		<StyledButton
			type='button'
			color={ColorTheme[theme]}
			fontSize={Sizes[size].fontSize}
			borderRadius={BorderRadius[radius]}
			label={label}
			{...props}
		>
			{label}
		</StyledButton>
	);
};

BtnFilled.propTypes = {
	theme: PropTypes.oneOf(themeArray),
	size: PropTypes.oneOf(SizeArray),
	label: PropTypes.string.isRequired,
	radius: PropTypes.oneOf(BorderRadiusArray),
	onClick: PropTypes.func,
};
