import { Container } from './Container';
import { LetterContainer } from './Letter';

type Props = {
  text: string;
};

export const GlitchEachWord = ({ text }: Props) => {
  return (
    <>
      {text.split(' ').map((letter, index) => (
        <Container key={index}>
          <LetterContainer data-text={letter}>{letter}</LetterContainer>
        </Container>
      ))}
    </>
  );
};
