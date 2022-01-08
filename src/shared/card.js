import styled from 'styled-components';
import { ColorAll } from './variables';

export const DefaultCard = styled.div`
	border: 1px solid ${ColorAll.lightGray};
	border-radius: ${({ borderRadius }) => borderRadius || '.3rem'};
	text-align: center;
	padding: 1rem;
`;

export const Image = styled.div`
	border: 1px solid ${ColorAll.lightGray};
	border-radius: 8px;
`;
export const P1 = styled.p`
	color: ${ColorAll.gray};
	font-family: 'Roboto', san-sarif;
	font-size: 0.8rem;
	margin: 0;
	padding: 0;
`;
export const P2 = styled(P1)``;

const dimension = '5rem';
export const StyledColorSwatch = styled(DefaultCard)`
	${Image} {
		height: ${dimension};
		width: ${dimension};
		margin-bottom: 0.5rem;
	}
`;

export const StyledIconCard = styled(DefaultCard)``;
