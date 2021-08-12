import { Container } from './Container';
import { LetterContainer } from './Letter';
import { useTheme } from '../../context/themeContext';

type Props = {
  text: string;
};

export const GlitchEachWord = ({ text }: Props) => {
  const { theme } = useTheme();
  return (
    <>
      {text.split(' ').map((letter, index) => (
        <Container key={index}>
          <LetterContainer data-text={letter} key={theme}>
            {letter}
          </LetterContainer>
        </Container>
      ))}
    </>
  );
};
