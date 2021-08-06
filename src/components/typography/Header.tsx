import { ComponentChildren } from 'preact';
import { FontSize, theme } from '../../css/theme';
import { styled } from '@linaria/react';

type Props = {
  as?: 'h1' | 'h2';
  size?: FontSize;
  children: ComponentChildren;
};

export const Header = ({ as, size = 'default', children }: Props) => {
  if (as === 'h1') {
    return <H1 fontSize={theme.fontSize[size]}>{children}</H1>;
  }

  if (as === 'h2') {
    return <H2 fontSize={theme.fontSize[size]}>{children}</H2>;
  }

  return <h6>{children}</h6>;
};

const H1 = styled.h1<{ fontSize: string }>`
  font-weight: 500;
  margin-bottom: ${theme.spacing[2]};
  font-size: ${(props) => props.fontSize};
`;

const H2 = styled.h1<{ fontSize: string }>`
  font-weight: 500;
  font-size: ${(props) => props.fontSize};
`;
