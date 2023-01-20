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

configureValidations();


function App() {
  
  const [claims, setClaims] = useState<claim[]>([
    {name: 'email', value : 'cristi@yahoo.com'}, 
    {name: 'role', value : 'client'} // client, admin, etc
  ]);


  function isClient() {
    return claims.findIndex(claim => claim.name === 'role' && claim.value === 'client') > -1; 
  }

  return (
  
    <BrowserRouter>
    <AuthenticationContext.Provider value={{claims, update: setClaims}}>
      
    
      <Menu /> 
          <div className="App">
            <Switch>
              {routes.map(route => 
              <Route key ={route.path} path={route.path} exact = {route.exact}>
                {route.isClient && !isClient() ? 
                <>
                  You're not allowed to see this page.
                </> : <route.component />}
                
              </Route>)}
            </Switch>
          </div>
          <footer className='bd-footer py-5 mt-5 bg-light'>
            <div className='container'>
                Clinic {new Date().getFullYear().toString()}
            </div>

          </footer>
          </AuthenticationContext.Provider>
      </BrowserRouter>
  
  );
}

export default App;
//menu component is left out => to be displayed on each page
//PATH = PAGE1 - SAME AS MENU COMPONENT - SHOULD BE CHANGED TO ACTUAL PAGE!!!!!!