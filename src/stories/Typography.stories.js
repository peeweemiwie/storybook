import { ColorTheme, ColorDark, ColorLight } from '../shared/variables';
import {
	AppTitle,
	PageTitle,
	GroupTitle,
	GroupTitleMinor,
	Paragraph,
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
			<Paragraph>Paragraph: Fox jumped over the lazy dog</Paragraph>
		</div>
	);
};

export default {
	title: 'Typography',
	component: Typography,
};
