import React from 'react';
import { styled } from '@linaria/react';
import { ChevronRight, ExternalLink } from 'react-feather';
import { Glitch } from './glitch';
import { Job } from '../pages/experience';
import { Header } from './typography/Header';
import { theme } from '../css/theme';
import { Flex, Box } from './layout/index';
import { css } from '@linaria/core';
import { GlitchEachWord } from './glitch/GlitchEachWord';

type Props = {
    job: Job;
};

export const WorkExperience: React.FC<Props> = ({ job }) => {
    const { company, timeRange, position, techstack, responsibilities } = job;

    return (
        <>
            <Container>
                <TimeRange>
                    <GlitchEachWord text={timeRange} />{' '}
                </TimeRange>
                <TimeLine>
                    <IconContainer>{company.name[0]}</IconContainer>
                </TimeLine>
                <Box>
                    <Glitch text={company.name} icon={ExternalLink}>
                        {({ GlitchText, GlitchIcon }) => (
                            <Company href={company.website} target="_blank" rel="noopener">
                                <Header
                                    as="h2"
                                    size="medium"
                                    variant="primary"
                                    style={{
                                        display: 'inline-flex',
                                        gap: theme.spacing[2],
                                        fontWeight: 500,
                                    }}
                                >
                                    <GlitchText />
                                    <GlitchIcon size={15} strokeWidth={2} />
                                </Header>
                            </Company>
                        )}
                    </Glitch>
                    <Position>
                        <GlitchEachWord text={position} />
                    </Position>
                    {responsibilities.length > 0 && (
                        <Flex direction="column" gap={2} className={styles.responsibilityList}>
                            {responsibilities.map((responsibility, index) => (
                                <Flex
                                    align="center"
                                    gap={2}
                                    className={styles.responsibility}
                                    key={index}
                                >
                                    <ChevronRight size={24} />
                                    <Box>
                                        <GlitchEachWord text={responsibility} />
                                    </Box>
                                </Flex>
                            ))}
                        </Flex>
                    )}
                    {techstack?.length > 0 && (
                        <TechStack>
                            <GlitchEachWord text={`Tech Stack: ${techstack.join(', ')}`} />{' '}
                        </TechStack>
                    )}
                </Box>
            </Container>
            <Line />
        </>
    );
};

const Container = styled.div`
    display: grid;
    grid-template-columns: 17.5rem 12rem 1fr;
    --container-margin-bottom: 6rem;
    margin-bottom: var(--container-margin-bottom);
`;

const Line = styled.span`
    max-width: 26rem;
    margin: 4rem auto;
    display: block;
    border-bottom: 1px solid var(--grey-400);
    display: none;
`;

const TimeRange = styled.span`
    font-size: ${theme.fontSize.xsmall};
    color: ${theme.colors.textSecondary};
    text-align: right;
    text-transform: uppercase;
`;

const TimeLine = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    --icon-container-size: 3.6rem;
    --icon-container-margin-top: calc(var(--icon-container-size) / 3);
    --icon-container-diff: calc(var(--icon-container-size) - var(--icon-container-margin-top));

    &::before {
        content: '';
        position: absolute;
        top: var(--icon-container-diff);
        display: block;
        height: calc(100% + var(--icon-container-diff));
        width: 1px;
        background-color: var(--color-primary);
    }

    ${Container}:last-of-type &::before {
        background-image: linear-gradient(to bottom, var(--color-primary) 70%, var(--app-bg));
    }
`;

const IconContainer = styled.div`
    color: var(--color-primary);
    height: var(--icon-container-size);
    width: var(--icon-container-size);
    margin-top: calc(var(--icon-container-margin-top) * -1);
    line-height: var(--icon-container-size);
    border: 1px solid var(--color-primary);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Company = styled.a`
    text-transform: uppercase;
    letter-spacing: 2px;
    display: inline-block;
    margin-bottom: ${theme.spacing[1]};
    display: flex;
    align-items: flex-start;
`;

const Position = styled.h4`
    margin-bottom: 1.2rem;
    font-weight: 300;
    font-size: var(--fs-small);
    color: ${theme.colors.textPrimary};
`;

const TechStack = styled.div`
    margin-bottom: 2.4rem;
    font-size: var(--fs-small);
    color: ${theme.colors.textSecondary};
`;

const styles = {
    responsibilityList: css`
        font-size: ${theme.fontSize.medium};
        margin-bottom: ${theme.spacing[4]};
        color: ${theme.colors.textSecondary};
    `,
    responsibility: css`
        position: relative;
        line-height: 1.2;

        svg {
            stroke-width: 1;
            color: var(--color-primary);
            width: 1.8rem;
            position: absolute;
            left: -2rem;
        }
    `,
};
