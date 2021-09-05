import { css } from '@linaria/core';
import { ComponentChildren } from 'preact';

type Props = {
  href: string;
  children: ComponentChildren;
  external?: boolean;
};

export const ExternalLink = ({ href, children }: Props) => (
  <a class={linkStyles} href={href} target="_blank">
    {children}
  </a>
);

const linkStyles = css`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    bottom: 0;
    border-bottom: 0.5px solid currentColor;
    transition: color 0.1s ease;
  }

  &:hover {
    color: var(--color-primary);
  }
`;
