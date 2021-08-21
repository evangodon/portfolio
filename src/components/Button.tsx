import { ComponentChildren } from 'preact';
import { css } from '@linaria/core';
import { theme } from '../css/theme';

type Props = {
  children: ComponentChildren;
  href?: string;
};

export const Button = ({ children, href }: Props) => {
  if (href) {
    return (
      <a class={button} href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return <button class={button}>{children}</button>;
};

const button = css`
  padding: ${theme.spacing[2]} ${theme.spacing[4]};
  background-color: transparent;
  color: var(--color-primary);
  border: 1px solid currentColor;
  border-radius: var(--border-radius);
  letter-spacing: 1px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing[2]};
  font-size: var(--fs-medium);

  --bg-hover-color: RGBA(255, 101, 80, 0.1);
  &:hover {
    background-color: var(--bg-hover-color);
  }

  body[data-theme='dark'] & {
    --bg-hover-color: RGBA(255, 101, 80, 0.2);
    font-weight: 500;
  }
`;
