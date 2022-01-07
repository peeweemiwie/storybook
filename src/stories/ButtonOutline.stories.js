import { Flex } from '../shared/wrappers';
import { BtnOutline } from './Button';
import { themeArray } from '../shared/arrays';
export const ButtonOutline = () => {
	return (
		<Flex colgap='.5rem'>
			{themeArray.map((theme, index) => (
				<BtnOutline
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
	title: 'Component/Buttons/Outline',
	component: ButtonOutline,
};
