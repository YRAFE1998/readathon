import React, { lazy, Suspense } from "react";
import './App.scss';
import { HashRouter, Switch, Route, Redirect, } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/foorter";
import AlertComponent from "./HOCS/alert";
import AuthContext from "./Context/authContext";
import Loader from "./HOCS/loader";
import ProtectedRoute from "./HOCS/ProtectedRoute";
const Dashboard = React.lazy(() => import('./containers/dashboard/dashboard'));
const NotFound = React.lazy(() => import('./containers/Not-Found/not-found'));
const Auth = React.lazy(() => import('./containers/Auth/auth'));


function App() {
  return (

    <HashRouter>
        <Suspense fallback={<>Loading ....</>}>
        <Loader>
          <AlertComponent></AlertComponent>
          <AuthContext>
            
            <Switch>
            <ProtectedRoute>
            <Route path={"/page"} component={Dashboard} />
            <Route path={"/auth"} component={Auth}></Route>

            </ProtectedRoute>

              <Redirect from="/" to="/auth" />
              <Route component={NotFound} />
            </Switch>
          </AuthContext>
          </Loader>

        </Suspense>

      </HashRouter>
  );
}

export default App;
