import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { usePersistedState } from './commons/shared-methods';
import { AuthProvider } from './contexts/auth';
import { ToggleContext } from './contexts/toggle-theme';
import { ThemeTypesEnum } from './models/ThemeEnum';
import Login from './components/Login';
import CreateExpenses from './components/protected-pages/Expenses/CreateExpenses';
import Overview from './components/protected-pages/Overview';
import PrivateRoutes from './components/protected-pages/PrivateRoutes';
import SideBar from './components/protected-pages/SideBar';
import GlobalStyle, { MainContainer } from './styles/globals';
import dark from './styles/themes/dark';
import light from './styles/themes/light';
import './App.css';
import './styles/globals';
import CreateMoneyDeposit from './components/protected-pages/MoneyDeposit/CreateMoneyDeposit';
import MoneyDepositList from './components/protected-pages/MoneyDeposit/MoneyDepositList';

export default function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('sm-theme', dark)

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
                  <PrivateRoutes exact path='/money-deposit' component={CreateMoneyDeposit} />
                  <PrivateRoutes exact path='/list-money-deposit' component={MoneyDepositList} />
                </>
              </AuthProvider>
            </MainContainer>
          </ThemeProvider>
        </ToggleContext.Provider>
      </Switch>
    </Router >
  );
}


