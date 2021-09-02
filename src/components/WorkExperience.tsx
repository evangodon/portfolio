import React from 'react';
import { styled } from '@linaria/react';
import { AlertCircle, ExternalLink, Layers, MapPin } from 'react-feather';
import { Glitch } from './glitch';
import { Job } from '../pages/experience';
import { Header } from './typography/Header';
import { theme } from '../css/theme';
import { Flex, Box } from './layout/index';

type Props = {
  job: Job;
};

export const WorkExperience: React.FC<Props> = ({ job }) => {
  const { company, timeRange, position, techstack, description } = job;

  return (
    <>
      <Container>
        <TimeRange>{timeRange}</TimeRange>
        <TimeLine>
          <IconContainer>
            <MapPin size={13} />
          </IconContainer>
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
                </Header>
              </Company>
            )}
          </Glitch>
          <Position>{position}</Position>
          <Description>
            <AlertCircle color={theme.colors.primary} /> <p>{description}</p>
          </Description>
          <TechStack>
            <Layers color={theme.colors.primary} /> {techstack.join(', ')}
          </TechStack>
        </Box>
      </Container>
      <Line />
    </>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 17.5rem 12rem 1fr;
  margin-bottom: ${theme.spacing[8]};

  svg {
    opacity: 0.8;
    --size: ${theme.fontSize.default};
    height: var(--size);
    width: var(--size);
    min-width: 1.4rem;
  }
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
  background-color: var(--app-bg);
  --icon-container-size: 3rem;
  --icon-container-margin-top: calc(var(--icon-container-size) / 3);
  --icon-container-diff: calc(var(--icon-container-size) - var(--icon-container-margin-top));

  &::before {
    content: '';
    position: absolute;
    top: var(--icon-container-diff);
    display: block;
    height: calc(100% + ${theme.spacing[6]} + 2px);
    width: 0.5px;
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
  border-radius: var(--border-radius);
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

  &:hover {
    text-decoration: underline;
  }

  svg {
    width: ${theme.fontSize.medium};
    opacity: 0.6;
    stroke-width: 1;
  }

  svg:hover {
    stroke-width: 2px;
    opacity: 1;
  }
`;

const Position = styled.h4`
  margin-bottom: ${theme.spacing[4]};
  font-weight: 300;
  font-size: var(--fs-small);
  color: ${theme.colors.textPrimary};
`;

const Description = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${theme.spacing[2]};
  margin-bottom: ${theme.spacing[4]};
  font-size: var(--fs-medium);
  color: var(--text-color-secondary);
`;

const TechStack = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  font-size: var(--fs-small);
  color: ${theme.colors.textSecondary};
`;
