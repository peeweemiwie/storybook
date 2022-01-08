import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ColorAll } from './variables';
import {
	MdAddShoppingCart,
	MdCheckCircleOutline,
	MdCheckCircle,
	MdFavoriteBorder,
	MdFavorite,
	MdHelpOutline,
	MdInfoOutline,
	MdErrorOutline,
	MdError,
	MdBrightness7,
	MdBedtime,
	MdExpandLess,
	MdExpandMore,
	MdOutlineAdd,
	MdClose,
	MdCancel,
	MdOutlineAddCircleOutline,
	MdOutlineAddCircle,
} from 'react-icons/md';

export const IconArray = [
	<MdAddShoppingCart />,
	<MdCheckCircleOutline />,
	<MdCheckCircle />,
	<MdFavoriteBorder />,
	<MdFavorite />,
	<MdHelpOutline />,
	<MdInfoOutline />,
	<MdErrorOutline />,
	<MdError />,
	<MdBrightness7 />,
	<MdBedtime />,
	<MdExpandLess />,
	<MdExpandMore />,
	<MdOutlineAdd />,
	<MdClose />,
	<MdCancel />,
	<MdOutlineAddCircleOutline />,
	<MdOutlineAddCircle />,
];
export const IconNameArray = IconArray.map((icon) => icon.type.name);

export const IconColor = {
	black: ColorAll.black,
	white: ColorAll.white,
	primary: ColorAll.primary,
	secondary: ColorAll.secondary,
	success: ColorAll.success,
	warning: ColorAll.warning,
	danger: ColorAll.danger,
	accent: ColorAll.accent,
};
export const IconColorArray = Object.keys(IconColor);

export const IconSizes = {
	sm: '1rem',
	md: '1.5rem',
	lg: '2rem',
};
export const IconSizesArray = Object.keys(IconSizes);

export const IconContainer = styled.span`
	color: ${({ color }) => color || ColorAll.black};
	font-size: ${({ size }) => size || '1rem'};
`;

export const DefaultIcon = ({ size, color, icon, ...props }) => {
	const iconIndex = IconNameArray.indexOf(icon);
	return (
		<IconContainer size={IconSizes[size]} color={IconColor[color]} {...props}>
			{IconArray[iconIndex]}
		</IconContainer>
	);
};

DefaultIcon.propsTypes = {
	color: PropTypes.oneOf(IconColorArray),
	size: PropTypes.oneOf(IconSizesArray),
	icon: PropTypes.oneOf(IconNameArray),
};
