import React, { Suspense, lazy, useState, useEffect } from "react";
import {Routes, Route, Outlet} from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import CSSTransition from "react-transition-group/esm/CSSTransition";
import './App.css';

import { Theme } from './utils/theme';
import { GlobalStyle } from './utils/globalstyle';

import Navigation from './routes/navigation/navigation.route';
import Home from './routes/home/home.route';
import About from './routes/about/about.route';

function App() {
  const [isLoading, setLoadingStatus] = useState(true);
  //needed for the exit animation of the loader
  const [showLoader, isShowingLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      isShowingLoader(false);
    }, 4250);
    setTimeout(() => {
      setLoadingStatus(false);
    }, 5000);
  });
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

