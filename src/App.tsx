import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import './App.css';
import { usePersistedState } from './commons/shared-methods';
import Login from './components/Login';
import CreateExpenses from './components/protected-pages/Expenses/CreateExpenses';
import Overview from './components/protected-pages/Overview';
import PrivateRoutes from './components/protected-pages/PrivateRoutes';
import SideBar from './components/protected-pages/SideBar';
import { AuthProvider, useAuth } from './contexts/auth';
import { ToggleContext } from './contexts/toggle-theme';
import { ThemeTypesEnum } from './models/themeEnum';
import './styles/globals';
import GlobalStyle, { MainContainer } from './styles/globals';
import dark from './styles/themes/dark';
import light from './styles/themes/light';

export default function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('sm-theme', dark)
  const user = useAuth()
  const handleTheme = (type?: string) => {
    switch (type) {
      case ThemeTypesEnum.LIGHT:
        setTheme(light)
        break
      case ThemeTypesEnum.DARK:
        setTheme(dark)
        break
      default:
        setTheme(light)
    }
  }

  return (
    <Router>
      <Switch>
        <ToggleContext.Provider value={{ handleTheme }}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <MainContainer>
              <AuthProvider>
                <>
                  <Route path={'/auth'} component={Login} />
                  <PrivateRoutes path='/' component={SideBar} />
                  <PrivateRoutes exact path='/overview' component={Overview} />
                  <PrivateRoutes exact path='/create-expenses' component={CreateExpenses} />
                </>
              </AuthProvider>
            </MainContainer>
          </ThemeProvider>
        </ToggleContext.Provider>
      </Switch>
    </Router >
  );
}


