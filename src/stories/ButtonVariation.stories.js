import { Flex } from '../shared/wrappers';
import { BtnDefault } from './Button';
import { GroupTitle } from '../shared/typography';

export const ButtonVariation = () => {
	return (
		<div>
			<GroupTitle>Sizes</GroupTitle>
			<Flex colgap='.5rem'>
				<BtnDefault theme='primary' label='small size' size='sm' radius='sm' />
				<BtnDefault theme='primary' label='medium size' size='md' radius='sm' />
				<BtnDefault theme='primary' label='large size' size='lg' radius='sm' />
			</Flex>
			<GroupTitle>Border radius</GroupTitle>
			<Flex colgap='.5rem'>
				<BtnDefault theme='primary' label='no radius' size='md' radius='none' />
				<BtnDefault
					theme='primary'
					label='small radius'
					size='md'
					radius='sm'
				/>
				<BtnDefault
					theme='primary'
					label='medium radius'
					size='md'
					radius='md'
				/>
				<BtnDefault
					theme='primary'
					label='large radius'
					size='md'
					radius='lg'
				/>
				<BtnDefault
					theme='primary'
					label='extra large radius'
					size='md'
					radius='xl'
				/>
				<BtnDefault theme='primary' label='r' size='md' radius='round' />
			</Flex>
			<GroupTitle>Icons</GroupTitle>
			<Flex colgap='.5rem'>
				<BtnDefault
					theme='primary'
					label='Contact us'
					size='sm'
					radius='sm'
					icon='mail'
				/>
				<BtnDefault
					theme='accent'
					label='Add'
					size='md'
					radius='sm'
					icon='add'
				/>
				<BtnDefault
					theme='secondary'
					label='close'
					size='lg'
					radius='xl'
					icon='close'
				/>
			</Flex>
		</div>
	);
};

export default {
	title: 'Component/Buttons/Variation',
	component: ButtonVariation,
};
