import React from 'react';
import Auth from '../utils/auth';

interface PootectedRouteProps {
    children: JSX.Element;
}

export const PootectedRoute: React.FC<PootectedRouteProps> = ({ children }) => {
    const isLoggedIn = Auth.loggedIn();

    if (!isLoggedIn) {
        return (
            <div>
                <h1>No authorized</h1>
                <p>You must be logged in to view this page.</p>
            </div>
        )
    } else {
        return children;
    }
}