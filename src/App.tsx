import React, { lazy, Suspense } from "react";
import './App.css';
import { HashRouter, Switch, Route, Redirect, } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/foorter";
import AlertComponent  from "./HOCS/alert";
const Dashboard = React.lazy(() => import('./containers/dashboard/dashboard'));
const NotFound = React.lazy(() => import('./containers/Not-Found/not-found'));
const Auth = React.lazy(() => import('./containers/Auth/auth'));


function App() {
  return (

    <HashRouter>
      <Suspense fallback={<>Loading ....</>}>
    <AlertComponent></AlertComponent>
        <Switch>
          <Route  path={"/page"} component={Dashboard}/>
          <Route  path={"/auth"} component={Auth}></Route>
          <Redirect from="/" to="/auth"/>
          <Route  component={NotFound}/> 
        </Switch>
      </Suspense>
    
    </HashRouter>
  );
}

export default App;
