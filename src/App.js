import logo from './logo.svg';
import {Routes, Route, Outlet} from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import './App.css';

import { Theme } from './utils/theme';
import { GlobalStyle } from './utils/globalstyle';

import Navigation from './routes/navigation/navigation.route';
import Home from './routes/home/home.route';
import About from './routes/about/about.route';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes> 
    </ThemeProvider>
  );
}

export default App;

