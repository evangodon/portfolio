import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import { Link } from 'wouter-preact';
import { theme } from '../css/theme';
import { Logo } from './Logo';
import { Flex } from './layout';
import { ComponentType } from 'preact';
import { Home, User, Clipboard, Code, Icon } from 'react-feather';
import { Glitch } from './glitch';
import { NavLink } from './NavLink';
import { Box } from './layout/index';

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
      <Flex direction="column" justify="center">
        <Box p={4} className={logoBox}>
          <Logo />
        </Box>
        <nav>
          <Flex direction="column">
            {navLinks.map((item) => (
              <NavLink href={item.link} name={item.name} icon={item.icon} />
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

const logoBox = css`
  margin-bottom: 14rem;
`;
