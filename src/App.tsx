import React, { lazy, Suspense } from "react";
import './App.css';
import { BrowserRouter, Switch, Route, } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/foorter";
const Home = React.lazy(() => import('./containers/Home/home'));
const NotFound = React.lazy(() => import('./containers/Not-Found/not-found'));

function App() {
  return (

    <BrowserRouter>
    <Header/>
      <Suspense fallback={<>....</>}>
        <Switch>
          <Route
            path="/not"
            component={NotFound}
          />

          <Route component={Home}
          />
        </Switch>
      </Suspense>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
