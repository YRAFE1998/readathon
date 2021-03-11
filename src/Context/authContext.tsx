
import React, { Context, ContextType, createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Header from '../components/Header/header';


export interface UserInterface {
    isAuth?: boolean;
    id?: number,
    name?: string,
    email?: string,
    phoneNumber?: string,
    countryCode?: string,
    mobileNumber?: string,
    organizationName?: string,
    organizationLogo?: string,
    schoolName?: string,
    schoolLogo?: string,
    roles?: string,
    accessToken?: string,
    content?: string,
}
export interface AuthInterface {
    user?: UserInterface;
    saveUser?: (params: UserInterface) => void;
    logoutUser?: (params: UserInterface) => void;
}


export const UserContext = React.createContext<AuthInterface | {}>({})

const AuthContextProvider: any = (props: any) => {
    const [user, setUser] = useState<UserInterface>({});
    const location = useLocation();
    useEffect(() => {
        handleShowHeader();
    }, [location])

    useEffect(() => {
        var retrievedUser = JSON.parse(localStorage.getItem('user') || '{}');
        if (retrievedUser?.isAuth) {
            saveUser(retrievedUser)
        }
    }, [])
    
    const saveUser = (params: UserInterface) => {
        localStorage.setItem('user', JSON.stringify({ ...params, isAuth: true }));
        setUser({ ...user, ...params, isAuth: true })
    }
    const logoutUser = () => {
        localStorage.removeItem("user")
        setUser({isAuth: false })
    }
    const handleShowHeader = () => {
        var retrievedUser = JSON.parse(localStorage.getItem('user') || '{}');
        if (retrievedUser?.isAuth) {
            return true;
        } else {
            return false;

        }
    }
    return (
        <>

            <UserContext.Provider value={{ user, saveUser, logoutUser }} >
            {handleShowHeader() && <Header />}

                {props.children}
            </UserContext.Provider>
        </>

    )
}
export default AuthContextProvider



