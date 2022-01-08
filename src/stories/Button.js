import PropTypes from 'prop-types';
import { ColorTheme } from '../shared/variables';
import { themeArray } from '../shared/variables';
import { StyledButton } from '../shared/btn.styled';

////////// variables //////////
export const BtnSizes = {
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
export const BtnSizeArray = Object.keys(BtnSizes);

const borderRadiusDefault = 8;
export const BtnBorderRadius = {
	none: 0,
	sm: borderRadiusDefault * 1 + 'px',
	md: borderRadiusDefault * 2 + 'px',
	lg: borderRadiusDefault * 3 + 'px',
	xl: borderRadiusDefault * 4 + 'px',
	round: '50%',
};
export const BtnBorderRadiusArray = Object.keys(BtnBorderRadius);

export const BtnFilled = ({ label, theme, size, radius, icon, ...props }) => {
	return (
		<StyledButton
			type='button'
			bgColor={ColorTheme[theme]}
			fontSize={BtnSizes[size].fontSize}
			borderRadius={BtnBorderRadius[radius]}
			label={label}
			icon={icon}
			{...props}
		>
			{label} {icon}
		</StyledButton>
	);
};

export const BtnOutline = ({ label, theme, size, radius, ...props }) => {
	return (
		<StyledButton
			type='button'
			borderColor={ColorTheme[theme]}
			color={ColorTheme[theme]}
			fontSize={BtnSizes[size].fontSize}
			borderRadius={BtnBorderRadius[radius]}
			label={label}
			{...props}
		>
			{label}
		</StyledButton>
	);
};

export const BtnText = ({ label, theme, size, radius, bool, ...props }) => {
	return (
		<StyledButton
			type='button'
			color={ColorTheme[theme]}
			fontSize={BtnSizes[size].fontSize}
			borderRadius={BtnBorderRadius[radius]}
			label={label}
			disabled={bool}
			{...props}
		>
			{label}
		</StyledButton>
	);
};

BtnFilled.propTypes = {
	theme: PropTypes.oneOf(themeArray),
	size: PropTypes.oneOf(BtnSizeArray),
	label: PropTypes.string.isRequired,
	radius: PropTypes.oneOf(BtnBorderRadiusArray),
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
};
