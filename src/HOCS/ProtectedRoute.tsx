import React, { useContext, useEffect } from 'react'
import { Route, useHistory, useLocation } from 'react-router-dom'
import { UserContext } from '../Context/authContext';

const ProtectedRoute = (props: any) => {
    const history = useHistory();
    const {user} = useContext<any>(UserContext);
    const location = useLocation();
    useEffect(() => {
        var retrievedUser = JSON.parse(localStorage.getItem('user') || '{}');
        if (retrievedUser?.isAuth) {
            if (location.pathname.includes("auth") || location.pathname == '/') {
                history.push("/page/dashboard");
            }
        }
        if (!retrievedUser?.isAuth) {
          if (location.pathname.includes("page")) {
              history.push("/auth");
          }
        }
      
    }, [user, location])
    return (
           <>
           {props.children}
           </>
    )
}

export default ProtectedRoute
