import React, { lazy, Suspense } from "react";
import './App.scss';
import {  Switch, Route, BrowserRouter, Redirect, } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/foorter";
import AlertComponent from "./HOCS/alert";
import AuthContext from "./Context/authContext";
import Loader from "./HOCS/loader";
import ProtectedRoute from "./HOCS/ProtectedRoute";
import { LoaderStyles } from "./HOCS/loader.styles";
import ScrollToTop from "./HOCS/scrollTop";
const Dashboard = React.lazy(() => import('./containers/PageRoute/pagesRoute'));
const NotFound = React.lazy(() => import('./containers/Not-Found/not-found'));
const Auth = React.lazy(() => import('./containers/Auth/auth'));


function App() {
  return (

    <BrowserRouter>
      <AuthContext>

        <Suspense fallback={<>
          <LoaderStyles style={{ background: "#00000033" }}>
            <div className="loader"></div>
          </LoaderStyles>
        </>}>
          <Loader>
            <AlertComponent></AlertComponent>
            <ScrollToTop />

            <Switch>
              <ProtectedRoute>
                <Route path={"/page"} component={Dashboard} />
                <Route path={"/auth"} component={Auth}></Route>

              </ProtectedRoute>

              <Redirect from="/" to="/auth" />
              <Route component={NotFound} />
            </Switch>
          </Loader>

        </Suspense>

      </AuthContext>
    </BrowserRouter>

  );
}

export default App;
