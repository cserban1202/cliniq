import { useEffect, useState } from 'react';
import './App.css';
import { cardDTO, landingPageDTO } from './consultation/card.model.d';
import CardList from './consultation/CardList';
import IndividualCard from './consultation/IndividualCard';
import Menu from './Menu';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './route-configure';
import IndexCategory from './CATEGORY1/IndexCategory';
import configureValidations from './Validations';
import { claim } from './auth/auth.models';
import AuthenticationContext from './auth/AuthenticationContext';
import React from 'react';
import { getClaims } from './auth/handlerJWT';
import configureInterceptor from './Utils/httpInterceptors';
import 'typeface-roboto';

configureValidations();
configureInterceptor();


function App() {
  
   //{name: 'email', value : 'cristi@yahoo.com'}, 
    //{name: 'role', value : 'client'} // client, admin, etc
  const [claims, setClaims] = useState<claim[]>([]);

  const styles = {
    fontFamily: 'Roboto'
  };

  useEffect(() => {
    setClaims(getClaims())
  }, [])

  function isClient() {
    const token = localStorage.getItem('token');
    return !!token; // return true if token exists (i.e. client is authenticated), false otherwise
  }


  return (
    <BrowserRouter>
    <AuthenticationContext.Provider value={{claims, update: setClaims}}>
      <div style={styles}>
      <Menu /> 
          <div className="App">
            <Switch>
              {routes.map(route => 
              <Route key ={route.path} path={route.path} exact = {route.exact}>
                {route.isClient && !isClient() ? <>
                  You're not allowed to see this page.
                </> :  <><route.component /> </>}
              </Route>)}
            </Switch>
          </div>
          <footer className='bd-footer py-4 mt-2 bg-light'>
            <div className='container'>
                CLINIQUE {new Date().getFullYear().toString()}
            </div>
          </footer>
          </div>
          </AuthenticationContext.Provider>
      </BrowserRouter>
  
  );
}

export default App;
//menu component is left out => to be displayed on each page
//PATH = PAGE1 - SAME AS MENU COMPONENT - SHOULD BE CHANGED TO ACTUAL PAGE!!!!!!