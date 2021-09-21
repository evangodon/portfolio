import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import { theme } from '../css/theme';
import { Logo } from './Logo';
import { Flex } from './layout';
import { Home, User, Clipboard, Code, Icon } from 'react-feather';
import { NavLink } from './NavLink';
import { breakpoint } from '../css/breakpoints';

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
      <LogoContainer p={4} justify="center">
        <Logo />
      </LogoContainer>
      <NavLinks>
        {navLinks.map((item) => (
          <NavLink href={item.link} name={item.name} icon={item.icon} />
        ))}
      </NavLinks>
      <span style={{ height: 77 }} />
    </Container>
  );
};

const Container = styled(Flex)`
  background-color: ${theme.colors.sidebarBackground};
  height: 100%;

  @media screen and (max-width: ${breakpoint.medium}) {
    width: 100%;
    grid-row: 2 / 3;
    flex-direction: row;
    align-items: center;
  }
`;

const LogoContainer = styled(Flex)`
  @media screen and (max-width: ${breakpoint.small}) {
    display: none;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${breakpoint.medium}) {
    flex-direction: row;
  }

  @media screen and (max-width: ${breakpoint.small}) {
    justify-content: space-around;
    width: 100%;
  }
`;
