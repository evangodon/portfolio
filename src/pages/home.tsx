import { styled } from '@linaria/react';
import { Header } from '../components/typography/Header';
import { Flex } from '../components/layout/index';
import { GlitchEachWord } from '../components/glitch/GlitchEachWord';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { Button } from '../components/Button';
import { css } from '@linaria/core';
import { theme } from '../css/theme';
import { FileText, GitHub, Linkedin } from 'react-feather';

const links = {
  github: 'https://github.com/evangodon',
  linkedin: 'https://www.linkedin.com/in/egodon',
  resume:
    'https://docs.google.com/document/d/1vm5VBqI-NUYHorUHxQd0HA2QssGK2x0Us0xlnDhO_g4/edit?usp=sharing',
};

export const Home = () => {
  useDocumentTitle('Home | Evan Godon');

  return (
    <Container direction="column" align="flex-start" justify="center">
      <Header as="h1" size="xlarge">
        <GlitchEachWord text="Hi, I'm Evan Godon" />
      </Header>
      <Header as="h2" size="large" variant="secondary" style={{ marginBottom: theme.spacing[6] }}>
        <GlitchEachWord text="I'm a software developer from Montreal." />
      </Header>
      <div className={buttonGroup}>
        <Button href={links.github}>
          <GitHub size={16} />
          <span>GitHub</span>
        </Button>
        <Button href={links.linkedin}>
          <Linkedin size={16} />
          <span>Linkedin</span>
        </Button>
        <Button href={links.resume}>
          <FileText size={16} />
          <span>Resume</span>
        </Button>
      </div>
    </Container>
  );
};

const Container = styled(Flex)`
  grid-column: 2;
`;

const buttonGroup = css`
  display: flex;
  gap: ${theme.spacing[3]};
`;
