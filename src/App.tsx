import React, { lazy, Suspense } from "react";
import './App.css';
import { BrowserRouter, Switch, Route, Redirect, } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/foorter";
const Home = React.lazy(() => import('./containers/Home/home'));
const NotFound = React.lazy(() => import('./containers/Not-Found/not-found'));
const Auth = React.lazy(() => import('./containers/Auth/auth'));


function App() {
  return (

    <BrowserRouter>
    
      <Suspense fallback={<>Loading ....</>}>
        <Switch>
          <Route exact={true} path={"/"} component={Home}/>
          <Route  path={"/auth"} component={Auth}></Route>
          <Route  component={NotFound}/> 
        </Switch>
      </Suspense>
    
    </BrowserRouter>
  );
}

export default App;
