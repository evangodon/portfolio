import { styled } from '@linaria/react';
import { ChevronRight } from 'react-feather';

import { theme } from '../css/theme';
import { Flex } from '../components/layout/index';
import { Header } from '../components/typography/Header';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { GlitchEachWord } from '../components/glitch/GlitchEachWord';
import linearCliImage from '../images/linear-cli.png';
import photoShareImage from '../images/photo-share.png';
import { breakpoint } from '../css/breakpoints';

type Project = {
  name: string;
  description: string;
  techStack: string;
  image: string;
  repo: string;
};

const projects: Readonly<Project[]> = [
  {
    name: 'Linear Cli',
    description: `Linear is an issue tracker I was using at work.
                  I decided to create CLI tool to interact with it using their public Graphql API.
                  With this CLI, I can create tickets, view them, and sort them by tags and status.`,
    techStack: 'Built with Typescript, Graphql, and the oclif CLI framework.',
    image: linearCliImage,
    repo: 'https://github.com/evangodon/linear-cli',
  },
  {
    name: 'Photo Share',
    description: `This is an app I created to share photos.
                  I can  easily upload albums of images and create a grid where I can re-arrange the photos in the order I want.`,
    techStack: 'Built with React, Cloudinary, and FaunaDB.',
    image: photoShareImage,
    repo: 'https://github.com/evangodon/photo-share',
  },
];

export const Projects = () => {
  useDocumentTitle('Projects | Evan Godon');

  return (
    <Container
      direction="column"
      align="center"
      justify="center"
      style={{ paddingTop: theme.spacing[8] }}
    >
      <Header as="h1" size="large" style={{ marginBottom: theme.spacing[8] }}>
        <GlitchEachWord text="Some Projects of Mine" />
      </Header>
      <Flex direction="column" gap={8}>
        {projects.map((project) => (
          <Project gap={5}>
            <Img src={project.image} width="45" />

            <Flex direction="column" gap={1}>
              <Header as="h3" size="default" style={{ fontWeight: 600 }}>
                {project.name}
              </Header>
              <P>{project.description}</P>
              <TechStack>{project.techStack}</TechStack>
              <RepoLink href={project.repo} target="_blank">
                See Code <ChevronRight size={20} />{' '}
              </RepoLink>
            </Flex>
          </Project>
        ))}
      </Flex>
    </Container>
  );
};

const Container = styled(Flex)`
  grid-column: 1 / -1;
`;

const Project = styled(Flex)`
  @media screen and (max-width: ${breakpoint.large}) {
    & {
      flex-direction: column;
    }
  }
`;

const Img = styled.img`
  width: 45rem;
  height: 23rem;
  border-radius: var(--border-radius);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  background-color: var(--grey-200);
`;

const P = styled.p`
  line-height: 1.4;
  font-size: var(--fs-medium);
  color: var(--text-color-primary);
  max-width: 60ch;
  margin-bottom: ${theme.spacing[1]};
`;

const TechStack = styled.span`
  font-size: var(--fs-small);
  color: var(--text-color-secondary);
  font-style: italic;
  margin-bottom: ${theme.spacing[3]};
`;

const RepoLink = styled.a`
  font-size: var(--fs-medium);
  color: var(--color-primary);
  display: inline-flex;
  align-items: center;
  opacity: 0.9;
  transition: opacity 0.2s ease;

  svg {
    transition: transform 0.2s ease;
  }

  &:hover {
    opacity: 1;

    svg {
      transform: translateX(10px);
    }
  }
`;
