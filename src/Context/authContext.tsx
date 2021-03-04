
import React, { Context, ContextType, createContext, useContext, useEffect, useState } from 'react';


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
    saveUser: (params: UserInterface) => void;
}


export const UserContext = React.createContext<AuthInterface | {}>({})

const AuthContextProvider: any = (props: any) => {
    const [user, setUser] = useState<UserInterface>({});


    useEffect(() => {
        var retrievedUser = JSON.parse(localStorage.getItem('user') || '{}');
        if (retrievedUser?.isAuth) {
            saveUser(retrievedUser)
        }
    }, [])
    const saveUser = (params: UserInterface) => {
        localStorage.setItem('user', JSON.stringify({...params, isAuth: true}));
        setUser({...params, isAuth: true})
    }
    return (
        <>

            <UserContext.Provider value={{ user, saveUser }} >
                {props.children}
            </UserContext.Provider>
        </>

    )
}
export default AuthContextProvider



