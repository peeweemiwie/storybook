import { BtnDefault, IconArray, BorderRadiusArray, SizeArray } from './Button';
import { themeArray } from '../shared/arrays';
export default {
	title: 'Component/Buttons/Button',
	component: BtnDefault,
	argTypes: {
		theme: {
			control: { type: 'inline-radio' },
			options: themeArray,
		},
		size: {
			control: { type: 'inline-radio' },
			options: SizeArray,
		},
		radius: {
			control: { type: 'inline-radio' },
			options: BorderRadiusArray,
		},
		icon: {
			control: { type: 'inline-radio' },
			options: IconArray,
		},
	},
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <BtnDefault {...args} />;

const Default = Template.bind({});
Default.args = { size: 'md', radius: 'sm', icon: 'none' };

export const Primary = Template.bind({});
Primary.args = { ...Default.args, theme: 'primary', label: 'Primary' };

export const Secondary = Template.bind({});
Secondary.args = { ...Default.args, theme: 'secondary', label: 'Secondary' };

export const Success = Template.bind({});
Success.args = { ...Default.args, theme: 'success', label: 'Success' };

export const Warning = Template.bind({});
Warning.args = { ...Default.args, theme: 'warning', label: 'Warning' };

export const Danger = Template.bind({});
Danger.args = { ...Default.args, theme: 'danger', label: 'Danger' };

export const Accent = Template.bind({});
Accent.args = { ...Default.args, theme: 'accent', label: 'Accent' };
