import { Header } from '../components/typography/Header';
import { GlitchEachWord } from '../components/glitch/GlitchEachWord';
import { styled } from '@linaria/react';
import { Flex } from '../components/layout/index';
import { WorkExperience } from '../components/WorkExperience';
import { theme } from '../css/theme';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import laneImg from '../images/lane.jpeg';
import huddolImg from '../images/huddol.jpeg';
import bmadImg from '../images/bmad.png';

export type Job = {
  company: {
    name: string;
    website: string;
    description: string;
  };
  position: string;
  timeRange: string;
  techstack: string[];
  role: string;
  image: string;
};

const jobs: Job[] = [
  {
    company: {
      name: 'Lane',
      website: 'https://www.joinlane.com/',
      description: `[Lane](https://www.joinlane.com/) is one of the world's leading workplace experience platforms.
      They focus on improving tenant communication, ressource bookings, and e-commerce.`,
    },
    position: 'Software Developer',
    timeRange: 'December 2019 - Present',
    techstack: ['React', 'React-Native', 'TypeScript', 'Node', 'GraphQL', 'PostgreSQL'],
    role: 'I currently work here building out core features using React, React Native and Node.',
    image: laneImg,
  },
  {
    company: {
      name: 'Huddol',
      website: 'https://www.huddol.com/',
      description:
        '[Huddol](https://www.huddol.com/) is a social media platform for helping people improve their well-being.',
    },
    position: 'Front-End Developer',
    timeRange: 'August 2018 - August 2019',
    techstack: ['React', 'Redux', 'Laravel', 'MySQL', 'Jest'],
    role: 'I worked on the marketing pages and the web app while learning backend code with the Laravel framework.',
    image: huddolImg,
  },
  {
    company: {
      name: 'Bmad',
      website: 'https://www.bmad.ca/',
      description: `[BMAD](https://www.bmad.ca/) focuses on creating augmented reality and virtual reality experiences.`,
    },
    position: 'Front-End Developer',
    timeRange: 'July 2017 - August 2018',
    techstack: ['React', 'Redux', 'SCSS', 'Django', 'PostgreSQL'],
    role: `I kicked off my software developer career here working on interesting projects such as a version control file manager
    for VFX artists and a VR video player.`,
    image: bmadImg,
  },
];

export const Experience = () => {
  useDocumentTitle('Experience | Evan Godon');

  return (
    <Container
      direction="column"
      align="center"
      justify="center"
      style={{ paddingTop: theme.spacing[8] }}
    >
      <Header as="h1" size="large" style={{ marginBottom: theme.spacing[8] }}>
        <GlitchEachWord text="Experience" />
      </Header>
      <Flex direction="column">
        {jobs.map((job) => (
          <WorkExperience job={job} />
        ))}
      </Flex>
    </Container>
  );
};

const Container = styled(Flex)`
  grid-column: 1 / -1;
`;
