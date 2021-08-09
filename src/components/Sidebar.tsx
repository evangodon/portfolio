import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import { Link } from 'wouter-preact';
import { theme } from '../css/theme';
import { Logo } from './Logo';
import { Flex } from './layout';
import { ComponentType } from 'preact';
import { Home, User, Clipboard, Code, Icon } from 'react-feather';
import { Glitch } from './glitch';

const navLinks: { name: string; icon: Icon; link: string }[] = [
  {
    name: 'Home',
    icon: Home,
    link: '/',
  },
  {
    name: 'About',
    icon: User,
    link: '/about',
  },
  {
    name: 'Experience',
    icon: Clipboard,
    link: '/experience',
  },
  {
    name: 'Projects',
    icon: Code,
    link: '/projects',
  },
];

export const Sidebar = () => {
  return (
    <Container>
      <Flex direction="column" justify="center" m={6} gap={8}>
        <Logo />
        <nav>
          <Flex direction="column" gap={4}>
            {navLinks.map((navItem) => (
              <Link href={navItem.link} className={link}>
                <a>
                  <Glitch text={navItem.name} icon={navItem.icon}>
                    {({ GlitchText, GlitchIcon }) => (
                      <Flex align="center" gap={2}>
                        <GlitchIcon size={18} />
                        <GlitchText />
                      </Flex>
                    )}
                  </Glitch>
                </a>
              </Link>
            ))}
          </Flex>
        </nav>
      </Flex>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${theme.colors.sidebarBackground};
`;

const link = css`
  cursor: pointer;
`;
