import { createContext, useContext, useState, useEffect } from 'react';
import { user as userClient } from '../client/api';
import { getToken, removeToken, setToken } from '../utils/helper';
import { AuthContext } from 'react-oauth2-code-pkce';
import { useNavigate } from 'react-router-dom';

const userContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [auth, setAuth] = useState(null);
    const { logOut: oauthLogout } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (getToken()) {
            getUser()
        }
    }, []);

    const getUser = async () => {
        return userClient.get().then((response) => {
            setUser(response.data.message.user);
            delete response.data.message.user;
            setAuth(response.data.message);
            return response;
        })
    }


    const login = async (provider, params) => {
        try {
            if (provider === 'email') {
                return userClient.login(params.email, params.password).then((response) => {
                    if (response.data.message.token) {
                        // handle jwt
                        setToken(response.data.message.token);
                        // get user
                        getUser();
                    }
                    return response.data;
                })
            }
            else {
                return userClient.oauthLogin(provider, params.token, params.idToken).then((response) => {
                    if (response.data.message.token) {
                        // handle jwt
                        setToken(response.data.message.token);
                        // get user
                        getUser();
                    }
                    return response.data;
                })
            }
        } catch (error) {
            setAuth(false);
            return error;
        }
    };

    const logout = async () => {
        return userClient.logout().then((response) => {
            setUser(null);
            setAuth(false);
            removeToken();
            oauthLogout();
            navigate("/login");
            return response;
        }).catch((error) => {
            setAuth(false);
            return error;
        });
    };

    return <userContext.Provider value={{
        user,
        auth,
        login,
        logout,
        getUser
    }}>
        {children}
    </userContext.Provider>
}

export const useUser = () => useContext(userContext);
