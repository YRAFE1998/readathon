import React, {useContext, useEffect} from 'react'
import { UserContext } from '../../../Context/authContext'

const Dashboard = (props: any) => {
    
    const {user, saveUser} = useContext<any>(UserContext)
    useEffect(()=>{
        saveUser({isAuth: false})
    }, [])
    useEffect(() => {console.log(user);
    }, [user])
    return (
        <div>
            Dashboard
        </div>
    )
}

export default Dashboard
