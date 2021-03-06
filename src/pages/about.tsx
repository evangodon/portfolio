import { styled } from '@linaria/react';

import { theme } from '../css/theme';
import { Flex } from '../components/layout/index';
import { Header } from '../components/typography/Header';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { GlitchEachWord } from '../components/glitch/GlitchEachWord';
import profileImg from '../images/profile.jpg';
import { Text } from '../components/typography/Text';
import { breakpoint } from '../css/breakpoints';

const profileSize = '180';

const copy = {
  about: `
    Hi there, I'm Evan.<br><br> I'm a software developer who's been building websites, web and mobile apps for the past 5 years.
    I consider myself primarily a frontend developer but I enjoy working on a variety of things, including writing SQL queries and
    building command line interfaces.
    <br><br>
    I currently work a company called [Lane](https://joinlane.com) where I write React and React Native code.
    `,
};

export const About = () => {
  useDocumentTitle('About | Evan Godon');

  return (
    <Container
      direction="column"
      align="center"
      justify="center"
      style={{ paddingTop: theme.spacing[8] }}
    >
      <Header as="h1" size="large" style={{ marginBottom: theme.spacing[8] }}>
        <GlitchEachWord text="About Me" />
      </Header>
      <Content gap={8} align="center">
        <Profile src={profileImg} width={profileSize} height={profileSize} />
        <Text maxWidth={65}>{copy.about}</Text>
      </Content>
    </Container>
  );
};

const Container = styled(Flex)`
  grid-column: 1 / -1;

  @media screen and (max-width: ${breakpoint.small}) {
    padding-bottom: ${theme.spacing[5]};
  }
`;

const Profile = styled.img`
  max-width: ${profileSize}px;
  border-radius: 50%;
  border: 2px solid var(--color-primary);
  background-color: var(--grey-200);

  @media screen and (max-width: ${breakpoint.small}) {
    --size: 120px;
    max-width: var(--size);
    height: var(--size);
  }
`;

const Content = styled(Flex)`
  @media screen and (max-width: ${breakpoint.medium}) {
    flex-direction: column;
    gap: ${theme.spacing[4]};
    padding: 0 ${theme.spacing[4]};
  }
`;
