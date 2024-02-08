import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { getToken } from './helper';

const withAuthenticationRequired = (ComposedComponent) => {
    const Component = (props) => {
        const params = useParams();
        if (getToken()) {
            return (
                <ComposedComponent {...props} />
            );
        }
        return <Navigate to={'/login'} state={params} />;
    };
    return <Component />;
};

export default withAuthenticationRequired;