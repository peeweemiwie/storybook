import {
	IconArray,
	IconNameArray,
	IconContainer,
	IconSizes,
} from '../shared/icons';
import { Flex } from '../shared/wrappers';
import { StyledIconCard, P1 } from '../shared/card';
import { GroupTitle } from '../shared/typography';

export const IconVariation = () => {
	const Icons = IconArray.map((icon, index) => (
		<StyledIconCard key={`icon-${index}`}>
			<Flex colgap='.5rem' justifyContent='center'>
				<IconContainer size={IconSizes.lg}>{icon}</IconContainer>
				<IconContainer size={IconSizes.md}>{icon}</IconContainer>
				<IconContainer size={IconSizes.sm}>{icon}</IconContainer>
			</Flex>
			<P1>{IconNameArray[index]}</P1>
		</StyledIconCard>
	));
	return (
		<>
			<GroupTitle>Icon Variation</GroupTitle>
			<Flex colgap='.5rem' rowgap='.5rem'>
				{Icons}
			</Flex>
		</>
	);
};

export default {
	title: 'Icons',
	component: IconVariation,
};
