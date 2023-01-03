import React, { createContext, useReducer } from 'react';
import { authReducer } from './AuthReducer';

export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined,
};

export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    logout: () => void;
    changeFavoriteIcon: (name: string) => void
    changeUserName: (username: string) => void
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: any)=> {
    const [authState, dispatch] = useReducer(authReducer, authInitialState);
    const signIn = () => {
        dispatch({ type: 'signIn'});
    };
    const logout = () => {
        dispatch({ type: 'logout'});
    };
    const changeFavoriteIcon = (name: string) => {
        dispatch({type: 'changeFavIcon', payload: name});
    };
    const changeUserName = (username: string) => {
        dispatch({type: 'changeUserName', payload:username})
    }
    return (
        <AuthContext.Provider
            value={{
                authState,
                signIn,
                logout,
                changeFavoriteIcon,
                changeUserName,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
