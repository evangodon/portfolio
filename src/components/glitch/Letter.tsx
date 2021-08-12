import { styled } from '@linaria/react';
import { TextContainer } from './Text';

export const LetterContainer = styled(TextContainer)`
  display: inline-block;
  margin-right: 8px;

  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }

  &::before {
    text-shadow: -3px 0 var(--color-primary);
    left: 3px;
  }
  &::after {
    text-shadow: -3px 0 var(--color-secondary), 2px 2px var(--color-secondary);
    left: -3px;
  }
`;
