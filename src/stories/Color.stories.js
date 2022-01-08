import { StyledColorSwatch, Image, P1, P2 } from '../shared/card';
import { Flex } from '../shared/wrappers';
import { ColorTheme, ColorDark, ColorLight } from '../shared/variables';
import { GroupTitle } from '../shared/typography';

export const ColorSwatch = () => {
	const themeColors = [];
	for (const [key, value] of Object.entries(ColorTheme)) {
		themeColors.push(
			<StyledColorSwatch
				key={`${key}-${value}`}
				style={{ borderTop: `10px solid ${value}` }}
			>
				<Image style={{ backgroundColor: value }}></Image>
				<P1>{key}</P1>
				<P2>{value}</P2>
			</StyledColorSwatch>,
		);
	}
	const lightColors = [];
	for (const [key, value] of Object.entries(ColorLight)) {
		lightColors.push(
			<StyledColorSwatch
				key={`${key}-${value}`}
				style={{ borderTop: `10px solid ${value}` }}
			>
				<Image style={{ backgroundColor: value }}></Image>
				<P1>{key}</P1>
				<P2>{value}</P2>
			</StyledColorSwatch>,
		);
	}
	const darkColors = [];
	for (const [key, value] of Object.entries(ColorDark)) {
		darkColors.push(
			<StyledColorSwatch
				key={`${key}-${value}`}
				style={{ borderTop: `10px solid ${value}` }}
			>
				<Image style={{ backgroundColor: value }}></Image>
				<P1>{key}</P1>
				<P2>{value}</P2>
			</StyledColorSwatch>,
		);
	}

	return (
		<>
			<GroupTitle>Theme Colors</GroupTitle>
			<Flex colgap='0.5rem' rowgap='0.5rem'>
				{themeColors}
			</Flex>
			<GroupTitle>Light Colors</GroupTitle>
			<Flex colgap='0.5rem' rowgap='0.5rem'>
				{lightColors}
			</Flex>
			<GroupTitle>Dark Colors</GroupTitle>
			<Flex colgap='0.5rem' rowgap='0.5rem'>
				{darkColors}
			</Flex>
		</>
	);
};

export default {
	title: 'Colors',
	component: ColorSwatch,
};
