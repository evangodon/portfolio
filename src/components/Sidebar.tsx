import { styled } from '@linaria/react';
import { theme } from '../css/theme';
import { Logo } from './Logo';
import { Flex } from './layout';

export const Sidebar = () => {
  return (
    <Container>
      <Flex justify="center" m={6}>
        <Logo />
      </Flex>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${theme.colors.sidebarBackground};
`;
