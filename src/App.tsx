import React, { lazy, Suspense } from "react";
import './App.scss';
import { HashRouter, Switch, Route, Redirect, } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/foorter";
import AlertComponent from "./HOCS/alert";
import AuthContext from "./Context/authContext";
import Loader from "./HOCS/loader";
import ProtectedRoute from "./HOCS/ProtectedRoute";
import { LoaderStyles } from "./HOCS/loader.styles";
import ScrollToTop from "./HOCS/scrollTop";
import Share from "./containers/Share/share";
const Dashboard = React.lazy(() => import('./containers/PageRoute/pagesRoute'));
const NotFound = React.lazy(() => import('./containers/Not-Found/not-found'));
const Auth = React.lazy(() => import('./containers/Auth/auth'));


function App() {
  return (

    <HashRouter>
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
              <Route path={"/share"} component={Share}></Route>

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
    </HashRouter>

  );
}

export default App;
