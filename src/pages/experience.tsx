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
    responsibilities: string[];
};

const jobs: Job[] = [
    {
        company: {
            name: 'Lane',
            website: 'https://www.joinlane.com/',
        },
        position: 'Software Developer',
        timeRange: 'December 2019 - Present',
        techstack: ['React', 'React-Native', 'Node', 'GraphQL', 'PostgreSQL'],
        responsibilities: [],
    },
    {
        company: {
            name: 'Huddol',
            website: 'https://www.huddol.com/',
        },
        position: 'Front-End Developer',
        timeRange: 'August 2018 - August 2019',
        techstack: ['React', 'Redux', 'Laravel', 'MySQL', 'Jest'],
        responsibilities: [
            'Built the front-end of a social-media app using server-side rendered React and Redux.',
            'Developed the UI while implementing the design specifications provided by the UX/UI designer.',
            'Maintained configuration code including Webpack to ensure app could efficiently be pushed to production.',
            'Developed the mobile version of the web app.',
        ],
    },
    {
        company: {
            name: 'Bmad',
            website: 'https://www.bmad.ca/',
        },
        position: 'Front-End Developer',
        timeRange: 'July 2017 - August 2018',
        techstack: ['React', 'Redux', 'Django', 'PostgreSQL'],
        responsibilities: [
            'Collaborated with team members using the Scrum framework.',
            'Responsible for the front-end infrastructure of a web and electron application using React.',
            'Developed the registration and login pages and built the UI for a virtual reality platform using a React VR library',
        ],
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
