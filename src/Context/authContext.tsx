
import React, { Context, ContextType, createContext, useContext, useEffect, useState } from 'react';


export interface UserInterface {
    isAuth?: boolean;
    id?: any;
    username?: string;
    email?: string;
    phoneNumber?: string;
    orgName?: string;
    orgLogo?: string;
    schoolName?: string;
    schoolLogo?: string;
    roles?: any;
    accessToken?: string;
}
export interface AuthInterface {
    user?: UserInterface;
    saveUser: (params: UserInterface) => void;
}


export const UserContext = React.createContext<AuthInterface |{}>({})

const AuthContextProvider: any = (props: any) => {
    const [user, setUser] = useState<UserInterface>({});
    
    
    useEffect(() => {
        setUser({...user, isAuth: true})
    }, [])
    const saveUser = (params: UserInterface) => {
        setUser(params)
    }
    return (
        <>
        
        <UserContext.Provider value={{user, saveUser}} >
                {props.children}
            </UserContext.Provider>
        </>

    )
}
export default AuthContextProvider



