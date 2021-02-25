import React, { lazy, Suspense } from "react";
import './App.scss';
import { HashRouter, Switch, Route, Redirect, } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/foorter";
import AlertComponent  from "./HOCS/alert";
import AuthContext from "./Context/authContext";
const Dashboard = React.lazy(() => import('./containers/dashboard/dashboard'));
const NotFound = React.lazy(() => import('./containers/Not-Found/not-found'));
const Auth = React.lazy(() => import('./containers/Auth/auth'));


function App() {
  return (

    <HashRouter>
      <Suspense fallback={<>Loading ....</>}>
    <AlertComponent></AlertComponent>
    <AuthContext>
        <Switch>
          <Route  path={"/page"} component={Dashboard}/>
          <Route  path={"/auth"} component={Auth}></Route>
          <Redirect from="/" to="/auth"/>
          <Route  component={NotFound}/> 
        </Switch>
        </AuthContext>
      </Suspense>
    
    </HashRouter>
  );
}

export default App;
