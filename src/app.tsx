import { Sidebar } from './components/Sidebar';
import { Route, Switch } from 'wouter-preact';
import { Home } from './pages/home';
import { About } from './pages/about';
import { Experience } from './pages/experience';
import { AppContainer } from './components/layout/AppContainer';
import { ContentContainer } from './components/layout/ContentContainer';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { ThemeProvider } from './context/themeContext';
import { Projects } from './pages/projects';

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
            <Route path="/projects" component={Projects} />
          </Switch>
        </ContentContainer>
      </AppContainer>
    </ThemeProvider>
  );
}
