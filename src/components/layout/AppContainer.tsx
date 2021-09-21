import { styled } from '@linaria/react';
import { breakpoint } from '../../css/breakpoints';

export const AppContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 21rem 1fr;

  @media screen and (max-width: ${breakpoint.medium}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 8rem;
  }
`;
