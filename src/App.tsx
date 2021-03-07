import { DefaultTheme, ThemeProvider } from 'styled-components';
import { usePersistedState } from './commons/shared-methods';
import CreateExpenses from './components/protected-pages/Expenses/CreateExpenses';
import SideBar from './components/protected-pages/SideBar'
import { ToggleContext } from './contexts/toggle-theme'
import { ThemeTypesEnum } from './models/themeEnum';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import './styles/globals'
import GlobalStyle, { MainContainer } from './styles/globals';
import dark from './styles/themes/dark';
import light from './styles/themes/light';
import lightDark from './styles/themes/lightDark';
import Overview from './components/protected-pages/Overview';

export default function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('sm-theme', dark)

  const handleTheme = (type?: string) => {
    switch (type) {
      case ThemeTypesEnum.LIGHT:
        setTheme(light)
        break
      case ThemeTypesEnum.LIGHT_DARK:
        setTheme(lightDark)
        break
      case ThemeTypesEnum.DARK:
        setTheme(dark)
        break
      default:
        setTheme(light)
    }
  }
  return (
    <div className="App">
      <Router>
        <Switch>
          <ToggleContext.Provider value={{ handleTheme }}>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              <MainContainer>
                <SideBar />
                <Route exact path={'/'} component={Overview} />
                <Route path={'/create-expenses'} component={CreateExpenses} />
              </MainContainer>
            </ThemeProvider>
          </ToggleContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}
