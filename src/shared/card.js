import styled from 'styled-components';
import { ColorAll } from './variables';

export const Swatch = styled.div``;
export const ColorName = styled.p``;
export const ColorHex = styled.p``;

const dimension = '5rem';
export const StyledColorSwatch = styled.div`
	border: 1px solid ${ColorAll.lightGray};
	text-align: center;
	padding: 1rem;
	${Swatch} {
		border: 1px solid ${ColorAll.lightGray};
		border-radius: 8px;
		height: ${dimension};
		width: ${dimension};
		margin-bottom: 0.5rem;
	}
	${ColorName},${ColorHex} {
		color: gray;
		font-family: 'Roboto', san-sarif;
		font-size: 0.8rem;
		margin: 0;
		padding: 0;
	}
`;
