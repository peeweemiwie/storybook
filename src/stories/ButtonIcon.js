import PropTypes from 'prop-types';
import { Btn, Sizes, BorderRadius } from './Button';
import { ColorTheme } from '../shared/variables';
import { MdMailOutline } from 'react-icons/md';

export const BtnIcon = ({ label, theme, size, radius, icon, ...props }) => {
	const bgColor = ColorTheme[theme];
	const fontSize = Sizes[size].fontSize;
	const borderRadius = BorderRadius[radius];

	return (
		<Btn
			type='button'
			bgColor={bgColor}
			fontSize={fontSize}
			borderRadius={borderRadius}
			{...props}
		>
			{label}
			<MdMailOutline />
		</Btn>
	);
};
