import { styled } from '@linaria/react';

import { theme } from '../css/theme';
import { Flex } from '../components/layout/index';
import { Header } from '../components/typography/Header';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { GlitchEachWord } from '../components/glitch/GlitchEachWord';
import profileImg from '../images/profile.jpg';
import { Text } from '../components/typography/Text';

const profileSize = '180';

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
      <Flex gap={5} align="center">
        <Profile src={profileImg} width={profileSize} height={profileSize} />
        <Text>
          Hey, I'm Evan. I currently work as a software developer at [Lane](https://joinlane.com/).
        </Text>
      </Flex>
    </Container>
  );
};

const Container = styled(Flex)`
  grid-column: 2;
`;

const Profile = styled.img`
  max-width: ${profileSize}px;
  border-radius: 50%;
  border: 2px solid var(--color-primary);
  background-color: var(--grey-200);
`;

const P = styled.p`
  color: var(--text-color-secondary);
  max-width: 60ch;
  margin-bottom: ${theme.spacing[4]};
`;
