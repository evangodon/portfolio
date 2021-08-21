import { Container } from './Container';
import { WordContainer } from './Word';
import { useTheme } from '../../context/themeContext';

type Props = {
  text: string;
  glitchOnMount?: boolean;
};

// TODO: wire up glitchOnMount prop
export const GlitchEachWord = ({ text, glitchOnMount = false }: Props) => {
  const { theme } = useTheme();
  return (
    <>
      {text.split(' ').map((word, index) => (
        <Container key={index}>
          <WordContainer data-text={word} key={theme}>
            {word}
          </WordContainer>
        </Container>
      ))}
    </>
  );
};
