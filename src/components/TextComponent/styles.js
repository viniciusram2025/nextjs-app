/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.p`
    ${({ theme }) => css`
        font-size: ${theme.fonts.sizes.medium};
    `}
`;
