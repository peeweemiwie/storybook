import { Flex } from '../shared/wrappers';
import { BtnFilled } from './Button';
import { themeArray } from '../shared/variables';
export const ButtonFilled = () => {
	return (
		<Flex colgap='.5rem' rowgap='.5rem'>
			{themeArray.map((theme, index) => (
				<BtnFilled
					theme={theme}
					label={theme.charAt(0).toUpperCase() + theme.slice(1)}
					size='md'
					radius='sm'
					key={index}
				/>
			))}
		</Flex>
	);
};

export default {
	title: 'UI/Buttons/Filled',
	component: ButtonFilled,
};
