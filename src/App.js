import React, { Suspense, lazy, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import CSSTransition from "react-transition-group/esm/CSSTransition";
import TransitionGroup from "react-transition-group/esm/TransitionGroup";

import { Theme } from './utils/theme';
import { GlobalStyle } from './utils/globalstyle';

import HomeLoader from './components/loaders/home-loader/home-loader.component'
import Loader from "./components/loaders/project-loader/project-loader.component";
import ViewportWidthProvider from "./utils/getViewport";

import Navigation from './routes/navigation/navigation.route';
import Home from './routes/home/home.route';

const About = lazy(() => import('./routes/about/about.route'));
// const ProjectDetailsRoute = lazy(() => import("./routes/ProjectDetailsRoute"));

// const ProjectDetailsRoute = () => {
//   return(
//     <h1>Project Details</h1>
//   )
// }

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

  if (isLoading) {
    return (
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          <CSSTransition
            classNames="load"
            timeout={{ enter: 0, exit: 750 }}
            in={showLoader}
            appear
            enter
            exit
          >
            <HomeLoader />
          </CSSTransition>
        </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <ViewportWidthProvider>
      <TransitionGroup>
      <CSSTransition

        classNames="change-route"
        timeout={{ enter: 750, exit: 750 }}
        appear
        enter
        exit
      >
        <Routes basename={process.env.PUBLIC_URL}>
          <Route path='/' element={<Navigation />}>
            <Route 
              index element={ <Home /> } />
            <Route 
              path='about' 
              element={  
                <Suspense fallback={<Loader />}>
                  <About />
                </Suspense>
              }  
              />
          </Route>
        </Routes> 
        </CSSTransition>
        </TransitionGroup>
      </ViewportWidthProvider>
    </ThemeProvider>
  );
}

export default App;

// <Route
//           path="about"
//           element={
//             <React.Suspense fallback={<>...</>}>
//               <About />
//             </React.Suspense>
//           }
//         />