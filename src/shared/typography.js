import styled from 'styled-components';
import { FontFamily } from './variables';
const { montserrat, roboto } = FontFamily;

export const AppTitle = styled.h1`
	font-family: ${montserrat};
	font-size: 2rem;
	font-weight: 500;
`;

export const PageTitle = styled.h2`
	font-family: ${montserrat};
	font-size: 1.5rem;
	font-weight: 400;
`;

export const GroupTitle = styled.h3`
	font-family: ${montserrat};
	font-size: 1.2rem;
	font-weight: 300;
`;

export const GroupTitleMinor = styled.h4`
	font-family: ${montserrat};
	font-size: 1rem;
	font-weight: 300;
`;

export const Paragraph = styled.p`
	font-family: ${roboto};
	font-size: 1rem;
	font-weight: 200;
`;
