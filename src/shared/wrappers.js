import styled from 'styled-components';

export const Flex = styled.div`
	align-items: flex-end;
	column-gap: ${({ colgap }) => colgap || 0};
	display: flex;
	flex-wrap: ${({ wrap }) => wrap || 'wrap'};
	justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
	row-gap: ${({ rowgap }) => rowgap || 0};
`;
