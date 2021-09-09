import { Sun, Moon } from 'react-feather';
import { styled } from '@linaria/react';
import { theme } from '../css/theme';
import { useTheme } from '../context/themeContext';

const iconSize = 18;

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  }

  return (
    <Container onClick={toggleTheme}>
      {theme === 'light' ? <Moon size={iconSize} /> : <Sun size={iconSize} />}
    </Container>
  );
};

const Container = styled.button`
  background-color: transparent;
  position: absolute;
  right: ${theme.spacing[4]};
  top: ${theme.spacing[4]};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid currentColor;
  border-radius: var(--border-radius);
  padding: ${theme.spacing[1]};
  color: var(--color-primary);
  cursor: pointer;
  opacity: 0.75;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;
