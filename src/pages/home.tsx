import { styled } from '@linaria/react';
import { Header } from '../components/typography/Header';
import { Flex } from '../components/layout/index';
import { Glitch } from '../components/glitch';
import { GlitchEachWord } from '../components/glitch/GlitchEachWord';

export const Home = () => {
  return (
    <Container direction="column" align="flex-start" justify="center">
      <Header as="h1" size="xlarge">
        <GlitchEachWord text="Hi, I'm Evan Godon" />
      </Header>
      <Header as="h2" size="large">
        <GlitchEachWord text="I'm a software developer from Montreal. Welcome to my website." />
      </Header>
    </Container>
  );
};

const Container = styled(Flex)`
  grid-column: 2;
`;
