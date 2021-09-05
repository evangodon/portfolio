import { styled } from '@linaria/react';
import { Header } from '../components/typography/Header';
import { Flex } from '../components/layout/index';
import { GlitchEachWord } from '../components/glitch/GlitchEachWord';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { Button } from '../components/Button';
import { css } from '@linaria/core';
import { theme } from '../css/theme';
import { FileText, GitHub, Linkedin } from 'react-feather';
import { useRenderLinks } from '../hooks/useRenderLinks';

const links = {
  github: 'https://github.com/evangodon',
  linkedin: 'https://www.linkedin.com/in/egodon',
  resume:
    'https://docs.google.com/document/d/1vm5VBqI-NUYHorUHxQd0HA2QssGK2x0Us0xlnDhO_g4/edit?usp=sharing',
};

const copy = {
  header: "Hi, I'm Evan Godon",
  subHeader: `I'm a software developer from Montreal. This is my personal website
  where you can learn more [about me](about) or view a few of my [side projects](projects).`,
};

export const Home = () => {
  useDocumentTitle('Home | Evan Godon');
  const subHeader = useRenderLinks(copy.subHeader);

  return (
    <Container direction="column" align="flex-start" justify="center">
      <Header as="h1" size="xlarge">
        <GlitchEachWord text={copy.header} />
      </Header>
      <Header as="h2" size="default" variant="secondary" style={{ marginBottom: theme.spacing[6] }}>
        {subHeader}
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
