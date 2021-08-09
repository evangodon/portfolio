import { ComponentChildren, createContext } from 'preact';
import { StateUpdater, useContext, useEffect, useState } from 'preact/hooks';

type Theme = 'light' | 'dark';

type ThemeContext = {
  theme: Theme;
  setTheme: StateUpdater<Theme>;
};

export const ThemeContext = createContext<ThemeContext>({} as ThemeContext);

type Props = {
  children: ComponentChildren;
};
export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<ThemeContext['theme']>(getTheme());

  useEffect(() => {
    const body = document.querySelector('body');

    if (body) {
      body.setAttribute('data-theme', theme);
      window.localStorage.setItem('theme', theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

function getTheme(): Theme {
  if (window) {
    const theme = window.localStorage.getItem('theme');

    if (theme) {
      return theme as Theme;
    }
  }

  return 'light';
}
