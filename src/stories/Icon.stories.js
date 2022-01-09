import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import {
	Icon,
	IconColorArray,
	IconSizesArray,
	IconNameArray,
} from '../shared/icons';
import PropTypes from 'prop-types';

const Template = (args) => <Icon {...args} />;
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

export default {
	title: 'Icons/Icon Example',
	component: Icon,
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
