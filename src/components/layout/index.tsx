import { styled } from '@linaria/react';
import { theme, Spacing } from '../../css/theme';
import type { Property } from 'csstype';

type IncludeSpacing = {
  p?: Spacing;
  m?: Spacing;
};

export const Box = styled.div<IncludeSpacing>`
  padding: ${(props) => (props.p ? theme.spacing[props.p] : 0)};
`;

type FlexProps = {
  direction?: Property.FlexDirection;
  justify?: Property.JustifyContent;
  align?: Property.AlignItems;
} & IncludeSpacing;

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : 'row')};
  justify-content: ${(props) => (props.justify ? props.justify : 'normal')};
  align-items: ${(props) => (props.align ? props.align : 'stretch')};
  padding: ${(props) => (props.p ? theme.spacing[props.p] : 0)};
  margin: ${(props) => (props.m ? theme.spacing[props.m] : 0)};
`;
