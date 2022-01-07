import {
	AppTitle,
	PageTitle,
	GroupTitle,
	GroupTitleMinor,
	P,
} from '../shared/typography';

export const Typography = () => {
	return (
		<div>
			<AppTitle>AppTitle: Fox jumped over the lazy dog</AppTitle>
			<PageTitle>PageTitle: Fox jumped over the lazy dog</PageTitle>
			<GroupTitle>GroupTitle: Fox jumped over the lazy dog</GroupTitle>
			<GroupTitleMinor>
				GroupTitleMinor: Fox jumped over the lazy dog
			</GroupTitleMinor>
			<P>P: Fox jumped over the lazy dog</P>
		</div>
	);
};

export default {
	title: 'Typography',
	component: Typography,
};
