import { StyledColorSwatch, Swatch, ColorName, ColorHex } from '../shared/card';
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
				<Swatch style={{ backgroundColor: value }}></Swatch>
				<ColorName>{key}</ColorName>
				<ColorHex>{value}</ColorHex>
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
				<Swatch style={{ backgroundColor: value }}></Swatch>
				<ColorName>{key}</ColorName>
				<ColorHex>{value}</ColorHex>
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
				<Swatch style={{ backgroundColor: value }}></Swatch>
				<ColorName>{key}</ColorName>
				<ColorHex>{value}</ColorHex>
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
