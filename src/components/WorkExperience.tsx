import React from 'react';
import { styled } from '@linaria/react';
import { Info, Layers, Search } from 'react-feather';
import { Job } from '../pages/experience';
import { Header } from './typography/Header';
import { theme } from '../css/theme';
import { Box } from './layout/index';
import { Text } from './typography/Text';

type Props = {
  job: Job;
};

export const WorkExperience: React.FC<Props> = ({ job }) => {
  const { company, timeRange, position, techstack, role, image } = job;

  return (
    <>
      <Container>
        <TimeRange>{timeRange}</TimeRange>
        <TimeLine>
          <IconContainer>
            <img src={image} />
          </IconContainer>
        </TimeLine>
        <Box>
          <Header
            as="h2"
            variant="primary"
            style={{
              fontWeight: 500,
            }}
          >
            {company.name}
          </Header>
          <Position>{position}</Position>
          <Section>
            <Info color={theme.colors.primary} /> <Text>{company.description}</Text>
          </Section>
          <Section>
            <Search color={theme.colors.primary} /> <Text>{role}</Text>
          </Section>
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
  --icon-container-size: 4rem;
  --icon-container-margin-top: calc(var(--icon-container-size) / 3);
  --icon-container-diff: calc(var(--icon-container-size) - var(--icon-container-margin-top));

  &::before {
    content: '';
    position: absolute;
    top: var(--icon-container-diff);
    display: block;
    height: calc(100% + ${theme.spacing[6]} + 2px);
    width: 1px;
    --timeline-color: var(--grey-200);
    background-color: var(--timeline-color);
  }

  ${Container}:last-of-type &::before {
    background-image: linear-gradient(to bottom, var(--timeline-color) 70%, var(--app-bg));
  }

  body[data-theme='dark'] &::before {
    --timeline-color: var(--grey-300);
  }
`;

const IconContainer = styled.div`
  color: var(--color-primary);
  height: var(--icon-container-size);
  width: var(--icon-container-size);
  margin-top: calc(var(--icon-container-margin-top) * -1);
  line-height: var(--icon-container-size);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border-radius: var(--border-radius);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    max-width: 100%;
  }
`;

const Position = styled.h4`
  margin-bottom: ${theme.spacing[4]};
  font-weight: 300;
  font-size: var(--fs-small);
  color: ${theme.colors.textPrimary};
`;

const Section = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${theme.spacing[2]};
  margin-bottom: ${theme.spacing[4]};
  font-size: var(--fs-medium);
`;

const TechStack = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  font-size: var(--fs-medium);
  color: ${theme.colors.textSecondary};
`;
