import PropTypes from 'prop-types';
import { ColorTheme } from '../shared/variables';
import { themeArray } from '../shared/variables';
import { StyledButton } from '../shared/btn.styled';
import {
	BtnSizes,
	BtnSizeArray,
	BtnBorderRadius,
	BtnBorderRadiusArray,
} from '../shared/variables';

export const BtnFilled = ({ label, theme, size, radius, ...props }) => {
	return (
		<StyledButton
			type='button'
			bgColor={ColorTheme[theme]}
			fontSize={BtnSizes[size].fontSize}
			borderRadius={BtnBorderRadius[radius]}
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
			fontSize={BtnSizes[size].fontSize}
			borderRadius={BtnBorderRadius[radius]}
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
			fontSize={BtnSizes[size].fontSize}
			borderRadius={BtnBorderRadius[radius]}
			label={label}
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
	onClick: PropTypes.func,
};
