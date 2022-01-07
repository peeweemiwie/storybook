import { Flex } from '../shared/wrappers';
import { BtnFilled } from './Button';
import { GroupTitle } from '../shared/typography';
import { ColorTheme } from '../shared/variables';

export const ButtonVariation = () => {
	const { primary, secondary, success, warning, danger, accent } = ColorTheme;
	return (
		<div>
			<GroupTitle>Sizes</GroupTitle>
			<Flex colgap='.5rem'>
				<BtnFilled
					theme='primary'
					bgColor={primary}
					label='small size'
					size='sm'
					radius='sm'
				/>
				<BtnFilled
					theme='primary'
					bgColor={primary}
					label='medium size'
					size='md'
					radius='sm'
				/>
				<BtnFilled
					theme='primary'
					bgColor={primary}
					label='large size'
					size='lg'
					radius='sm'
				/>
			</Flex>
			<GroupTitle>Border radius</GroupTitle>
			<Flex colgap='.5rem' rowgap='.5rem'>
				<BtnFilled
					theme='primary'
					bgColor={primary}
					label='no radius'
					size='md'
					radius='none'
				/>
				<BtnFilled
					theme='primary'
					bgColor={secondary}
					label='small radius'
					size='md'
					radius='sm'
				/>
				<BtnFilled
					theme='primary'
					bgColor={success}
					label='medium radius'
					size='md'
					radius='md'
				/>
				<BtnFilled
					theme='primary'
					bgColor={warning}
					label='large radius'
					size='md'
					radius='lg'
				/>
				<BtnFilled
					theme='primary'
					bgColor={accent}
					label='extra large radius'
					size='md'
					radius='xl'
				/>
				<BtnFilled theme='primary' label='r' size='md' radius='round' />
			</Flex>
		</div>
	);
};

export default {
	title: 'UI/Buttons/Variation',
	component: ButtonVariation,
};
