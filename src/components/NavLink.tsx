import { css } from '@linaria/core';
import { Icon } from 'react-feather';
import { theme } from '../css/theme';
import { Link, useRoute } from 'wouter-preact';
import { Glitch } from './glitch/index';
import { Flex } from './layout/index';

type Props = {
  href: string;
  name: string;
  icon: Icon;
};

export const NavLink = ({ href, name, icon }: Props) => {
  const [isActive] = useRoute(href);

  return (
    <Link href={href}>
      <a data-active={isActive} className={link}>
        <Glitch text={name} icon={icon}>
          {({ GlitchText, GlitchIcon }) => (
            <span className={navItem}>
              <GlitchIcon size={18} />
              <GlitchText />
            </span>
          )}
        </Glitch>
      </a>
    </Link>
  );
};

const link = css`
  cursor: pointer;
  opacity: 0.75;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    --height: 20px;
    top: calc(50% - var(--height) / 2);
    height: var(--height);
    width: 3px;
    border-radius: 3px;
    background-color: var(--color-primary);
    box-shadow: -2px 0 20px 5px var(--color-primary);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &[data-active='true'] {
    opacity: 1;
  }

  &[data-active='true']::before {
    opacity: 1;
  }
`;

const navItem = css`
  width: 100%;
  padding: ${theme.spacing[2]} ${theme.spacing[4]};
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing[3]};
`;
