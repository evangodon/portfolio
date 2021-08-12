import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import { theme } from '../css/theme';
import { Logo } from './Logo';
import { Flex } from './layout';
import { Home, User, Clipboard, Code, Icon } from 'react-feather';
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
    <Container direction="column" justify="space-between">
      <Box p={4}>
        <Logo />
      </Box>
      <nav>
        <Flex direction="column">
          {navLinks.map((item) => (
            <NavLink href={item.link} name={item.name} icon={item.icon} />
          ))}
        </Flex>
      </nav>
      <span style={{ height: 77 }} />
    </Container>
  );
};

const Container = styled(Flex)`
  background-color: ${theme.colors.sidebarBackground};
  height: 100%;
`;
