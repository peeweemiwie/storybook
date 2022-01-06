export const FontFamily = {
	montserrat: 'Montserrat, sans-serif',
	PTMono: 'PT Mono, monospace',
	roboto: 'Roboto, sans-serif',
	robotoMono: 'Roboto Mono, monospace',
	Quicksand: 'Quicksand, sans-serif',
};

export const Color = {
	light: '#eee',
	dark: '#1a1a1a',
	white: '#fff',
	black: '#000',
	gray: '#414141',
	lightGray: '#7a7a7a',
	darkGray: '#202124',
	cardBg: '#2b2b2b',
	navy: '#031f41',
	primary: '#27d0ff',
	secondary: '#7a7a7a',
	success: '#22da93',
	warning: '#feb900',
	danger: '#f23557',
	accent: '#e927ff',
};

const ColorLight = {
	white: '#fff',
	light: '#eee',
	lightGray: '#7a7a7a',
};

const ColorDark = {
	gray: '#414141',
	darkGray: '#202124',
	dark: '#1a1a1a',
	navy: '#031f41',
	black: '#000',
};

const ColorTheme = {
	primary: '#27d0ff',
	secondary: '#7a7a7a',
	success: '#22da93',
	warning: '#feb900',
	danger: '#f23557',
	accent: '#e927ff',
};

const ColorAll = {
	...ColorTheme,
	...ColorDark,
	...ColorLight,
};

export { ColorTheme, ColorDark, ColorLight, ColorAll };

const baseFontSize = 1.6;
export const FontSize = {
	fontXxl: baseFontSize * 4 + 'rem',
	fontXl: baseFontSize * 3 + 'rem',
	fontLg: baseFontSize * 2 + 'rem',
	fontMd: Math.round(baseFontSize * 1.5 * 10) / 10 + 'rem',
	fontReg: baseFontSize + 'rem',
	fontSm: Math.round(baseFontSize * 0.9 * 10) / 10 + 'rem',
	fontXs: Math.round(baseFontSize * 0.8 * 10) / 10 + 'rem',
};

export const Breakpoints = {
	breakpointSm: '576px',
	breakpointMd: '768px',
	breakpointXl: '1200px',
};

export const Shadow = {
	shadow1: '0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.1)',
	shadow2: '0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.2)',
	shadow3: '0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.3)',
	shadow4: '0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.4)',
	shadow5: '0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.5)',
	shadow6: '0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.6)',
	shadow7: '0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.7)',
	shadow8: '0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.8)',
	shadow9: '0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.9)',
	shadow10: '0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 1)',
};

const baseBorderRadius = 0.4;
export const BorderRadius = {
	borderRadiusSm: baseBorderRadius + 'rem',
	borderRadiusMd: baseBorderRadius * 2 + 'rem',
	borderRadiusLg: baseBorderRadius * 3 + 'rem',
	borderRadiusXl: baseBorderRadius * 4 + 'rem',
	borderRadiusRound: '50%',
};
