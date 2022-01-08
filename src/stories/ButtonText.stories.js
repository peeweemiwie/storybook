import { Flex } from '../shared/wrappers';
import { BtnText } from './Button';
import { themeArray } from '../shared/variables';
export const ButtonText = () => {
	return (
		<Flex colgap='.5rem'>
			{themeArray.map((theme, index) => (
				<BtnText
					theme={theme}
					label={theme.charAt(0).toUpperCase() + theme.slice(1)}
					size='md'
					key={index}
				/>
			))}
		</Flex>
	);
};

export default {
	title: 'UI/Buttons/Text',
	component: ButtonText,
};
