import { Header } from '../components/typography/Header';
import { GlitchEachWord } from '../components/glitch/GlitchEachWord';
import { styled } from '@linaria/react';
import { Flex } from '../components/layout/index';
import { WorkExperience } from '../components/WorkExperience';
import { theme } from '../css/theme';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export type Job = {
  company: {
    name: string;
    website: string;
  };
  position: string;
  timeRange: string;
  techstack: string[];
  description: string;
};

const jobs: Job[] = [
  {
    company: {
      name: 'Lane',
      website: 'https://www.joinlane.com/',
    },
    position: 'Software Developer',
    timeRange: 'December 2019 - Present',
    techstack: ['React', 'React-Native', 'TypeScript', 'Node', 'GraphQL', 'PostgreSQL'],
    description: 'Lane is the world’s leading workplace experience platform.',
  },
  {
    company: {
      name: 'Huddol',
      website: 'https://www.huddol.com/',
    },
    position: 'Front-End Developer',
    timeRange: 'August 2018 - August 2019',
    techstack: ['React', 'Redux', 'Laravel', 'MySQL', 'Jest'],
    description: 'Huddol is a platform for helping people improve their well-being.',
  },
  {
    company: {
      name: 'Bmad',
      website: 'https://www.bmad.ca/',
    },
    position: 'Front-End Developer',
    timeRange: 'July 2017 - August 2018',
    techstack: ['React', 'Redux', 'Django', 'PostgreSQL'],
    description: `BMAD focuses on creating augmented reality and virtual reality experiences.`,
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
  grid-column: 2;
`;
