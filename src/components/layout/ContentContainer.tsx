import { styled } from '@linaria/react';
import { breakpoint } from '../../css/breakpoints';

export const ContentContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 70rem 1fr;
  overflow-x: hidden;
  overflow-y: auto;

  @media screen and (max-width: ${breakpoint.medium}) {
    grid-template-columns: 1fr;
    grid-row: 1 / 2;
    display: flex;
    justify-content: center;
  }
`;
