import styled from 'styled-components';

export const Flex = styled.div`
	align-items: flex-end;
	display: flex;
	flex-wrap: ${({ wrap }) => wrap || 'wrap'};
	column-gap: ${({ colgap }) => colgap || 0};
	row-gap: ${({ rowgap }) => rowgap || 0};
`;
