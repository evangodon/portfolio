import { styled } from '@linaria/react';

import { theme } from '../css/theme';
import { Flex } from '../components/layout/index';
import { Header } from '../components/typography/Header';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { GlitchEachWord } from '../components/glitch/GlitchEachWord';

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
        </Container>
    );
};

const Container = styled(Flex)`
    grid-column: 2;
`;
