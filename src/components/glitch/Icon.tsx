import { styled } from '@linaria/react';

export const IconContainer = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  & svg:first-of-type,
  & svg:last-of-type {
    position: absolute;
  }
`;
