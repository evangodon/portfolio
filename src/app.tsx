import { Sidebar } from './components/Sidebar';
import { Route, Switch } from 'wouter-preact';
import { Home } from './pages/home';
import { About } from './pages/about';
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
          </Switch>
        </ContentContainer>
      </AppContainer>
    </ThemeProvider>
  );
}
