import styled from 'styled-components';
import { ColorLight, Shadow } from '../shared/variables';

export const StyledButton = styled.button`
	border: 1px solid transparent;
	border-color: ${({ borderColor }) => borderColor || 'transparent'};
	border-radius: ${({ borderRadius }) => borderRadius || 0};
	background-color: ${({ bgColor }) => bgColor || 'transparent'};
	color: ${({ color }) => color || ColorLight.white};
	cursor: pointer;
	font-size: ${({ fontSize }) => fontSize || '1.2rem'};
	padding: 0.5em 1em;
	transition: transform 200ms ease-in;
	&:hover {
		box-shadow: ${Shadow.shadow1};
		transform: scale(1.05);
	}
	&:disabled {
		cursor: not-allowed;
		opacity: 0.5;
		&:hover {
			box-shadow: none;
			transform: none;
		}
	}
`;
