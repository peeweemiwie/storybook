import { BtnIcon, IconArray } from './Button';
import { themeArray } from '../shared/arrays';
import { GroupTitle } from '../shared/typography';
import { Flex } from '../shared/wrappers';
export const ButtonIcon = () => {
	return (
		<div>
			<GroupTitle>Filled Buttons</GroupTitle>
			<Flex colgap='.5rem'>
				{themeArray.map((theme, index) => (
					<BtnIcon
						theme={theme}
						label={IconArray[index]}
						size='md'
						radius='sm'
						key={index}
						icon={IconArray[index]}
					/>
				))}
			</Flex>
		</div>
	);
};

export default {
	title: 'Component/Buttons/Icon',
	component: ButtonIcon,
};
