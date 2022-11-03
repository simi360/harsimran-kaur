import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { NavigationContainer, NavigationItems, LogoContainer } from "./nav.styles";

const Navigation =() => {
  return (
    <Fragment>
        <NavigationContainer>
            <LogoContainer to={{pathname: "/"}} aria-label="home">
                Harsimran 
                <span>Kaur</span>
            </LogoContainer>
            <NavigationItems to="">Home</NavigationItems>
            <NavigationItems to="/about">About</NavigationItems>
        </NavigationContainer>
        <Outlet />
    </Fragment>
  );
}

export default Navigation;