import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import {
    NavigationContainer,
    NavLinks,
    NavLink,
    LogoContainer,
  } from './navigation.styles';

const Navigation = () => {
    return(
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>HARSIMRAN KAUR</LogoContainer>

                <NavLinks>
                    <NavLink to='/'>HOME</NavLink>
                    <NavLink to='/about'>ABOUT</NavLink>
                </NavLinks>
            </NavigationContainer>
            <Outlet />
        </Fragment>
      )
}

export default Navigation;