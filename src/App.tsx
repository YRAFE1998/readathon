import React, { lazy, Suspense } from "react";
import './App.scss';
import { HashRouter, Switch, Route, Redirect, } from "react-router-dom";
import AlertComponent from "./HOCS/alert";
import AuthContext from "./Context/authContext";
import Loader from "./HOCS/loader";
import ProtectedRoute from "./HOCS/ProtectedRoute";
import { LoaderStyles } from "./HOCS/loader.styles";
import ScrollToTop from "./HOCS/scrollTop";
import Share from "./containers/Share/share";
import DonationPage from "./containers/DonationPage/donationPage";

const Dashboard = React.lazy(() => import('./containers/PageRoute/pagesRoute'));
const NotFound = React.lazy(() => import('./containers/Not-Found/not-found'));
const Auth = React.lazy(() => import('./containers/Auth/auth'));
const Homepage = React.lazy(() => import('./containers/Home/home'));


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
              <Route exact path={"/"} component={Homepage}></Route>
              <Route path={"/share"} component={Share}></Route>
              <Route path={"/donation"} component={DonationPage}></Route>


              <ProtectedRoute>
                <Route path={"/page"} component={Dashboard} />
                <Route path={"/auth"} component={Auth} />

              </ProtectedRoute>

              <Route component={NotFound} />
            </Switch>
          </Loader>

        </Suspense>

      </AuthContext>
    </HashRouter>

  );
}

export default App;
