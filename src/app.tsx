import { Sidebar } from './components/Sidebar';
import { Route, Switch } from 'wouter-preact';
import { Home } from './pages/home';
import { About } from './pages/about';
import { Experience } from './pages/experience';
import { AppContainer } from './components/layout/AppContainer';
import { ContentContainer } from './components/layout/ContentContainer';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { ThemeProvider } from './context/themeContext';

export function App() {
  return (
    <ThemeProvider>
      <AppContainer>
        <Sidebar />
        <ThemeSwitcher />
        <ContentContainer>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/experience" component={Experience} />
          </Switch>
        </ContentContainer>
      </AppContainer>
    </ThemeProvider>
  );
}
