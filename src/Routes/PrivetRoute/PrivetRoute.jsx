import React, { useContext } from 'react';
import { UserContext } from '../../Context/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user,loading} = useContext(UserContext);
    const location = useLocation()
    console.log(location);
    if(loading){
        return <div>loading........</div>
    }
    if(user){
        return children
    }
    return (
        <Navigate to={'/login'} replace state={{from:location}}>
            
        </Navigate>
    );
};

export default PrivetRoute;