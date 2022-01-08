import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import {
	DefaultIcon,
	IconColorArray,
	IconSizesArray,
	IconNameArray,
} from '../shared/icons';
import PropTypes from 'prop-types';

const Template = (args) => <DefaultIcon {...args} />;
export const PrimaryFavoriteMd = Template.bind({});
PrimaryFavoriteMd.args = { color: 'primary', icon: 'MdFavorite', size: 'md' };

export const DangerErrorLg = Template.bind({});
DangerErrorLg.args = {
	color: 'danger',
	icon: 'MdError',
	size: 'lg',
};

export const SuccessCheckSm = Template.bind({});
SuccessCheckSm.args = {
	color: 'success',
	icon: 'MdCheckCircle',
	size: 'sm',
};

DefaultIcon.propsTypes = {
	color: PropTypes.oneOf(IconColorArray),
	size: PropTypes.oneOf(IconSizesArray),
	icon: PropTypes.oneOf(IconNameArray),
};

export default {
	title: 'Icons/Icon Example',
	component: DefaultIcon,
	argTypes: {
		color: {
			control: { type: 'inline-radio' },
			options: IconColorArray,
		},
		size: {
			control: { type: 'inline-radio' },
			options: IconSizesArray,
		},
		icon: {
			control: { type: 'inline-radio' },
			options: IconNameArray,
		},
	},
};
