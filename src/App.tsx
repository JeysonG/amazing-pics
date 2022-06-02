/* Theme */
import { useDarkMode } from './hooks/useDarkMode';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './components/GlobalStyle';
import { lightTheme, darkTheme } from './components/Themes';

/* Navbar */
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About/';
import Events from './pages/Events/';
import AnnualReport from './pages/Annual/';
import Teams from './pages/Team/';
import Blogs from './pages/Blogs/';
import SignUp from './pages/SignUp/';
import SignIn from './pages/SignIn/';

/* Footer */
import Footer from './components/Footer';

let themeMode = lightTheme;

const App = () => {
  /* State */

  const { theme, themeToggler, mountedComponent } = useDarkMode();

  themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />

      <Router>
        <Navbar toggleChecked={theme === 'dark'} themeToggler={themeToggler} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/annual" element={<AnnualReport />} />
          <Route path="/team" element={<Teams />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </Router>

      <Footer />
    </ThemeProvider>
  );
};

type ThemeType = typeof themeMode;

export type { ThemeType };
export default App;
