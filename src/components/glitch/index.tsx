import { Icon } from 'react-feather';
import { useTheme } from '../../context/themeContext';

import { Container } from './Container';
import { TextContainer } from './Text';
import { IconContainer } from './Icon';
import { glitchAnimations } from './glitchAnimations';

type Props = {
  text: string;
  icon?: Icon;
  delay?: number;
  children: ({ GlitchText, GlitchIcon }: any) => JSX.Element;
};

/**
 */
export const Glitch = ({ text, icon: Icon, delay = 0, children }: Props) => {
  const { theme } = useTheme();

  const GlitchIcon = Icon
    ? (props: { size: number }) => (
        <IconContainer>
          <Icon {...props} />
          <Icon {...props} />
          <Icon {...props} />
        </IconContainer>
      )
    : null;

  const GlitchText = () => (
    <TextContainer data-text={text}>{text}</TextContainer>
  );

  return (
    <Container className={glitchAnimations}>
      {children({ GlitchText, GlitchIcon })}
    </Container>
  );
};
