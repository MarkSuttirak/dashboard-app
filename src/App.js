import React, { useState, useEffect, createContext } from "react";
import Router from './routes';
import './App.scss';
import { AuthProvider } from 'react-oauth2-code-pkce';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useToast } from './hooks/useToast';
import { UserProvider } from './hooks/useUser';
import { ServiceProvider } from "./components/provider/serviceProvider";
import { MemberProvider } from "./components/provider/memberProvider";
import { useTranslation } from "react-i18next";

const authConfig = {
  autoLogin: false,
  decodeToken: false,
  clientId: '2000074326',
  authorizationEndpoint: 'https://access.line.me/oauth2/v2.1/authorize',
  tokenEndpoint: 'https://api.line.me/oauth2/v2.1/token',
  redirectUri: `${process.env.NODE_ENV === 'development' ?
    "http://localhost:3000" :
    window.location.origin
    }/callback`,
  scope: 'openid profile email',
  state: "a1212s4s",
  onRefreshTokenExpire: (event) => window.confirm('Session expired. Refresh page to continue using the site?') && event.login(),
}

export const switchContext = createContext();

function App() {
  const {t,i18n} = useTranslation();
  const { showToast } = useToast();
  const queryClient = new QueryClient({
    defaultOptions: {
      mutations: {
        onError: (error) => {
          if (error.response.status === 500) {
            showToast('error', 'Something went wrong. Please try again later.')
          } else {
            if (error.response.data._server_messages) {
              showToast('error', JSON.parse(JSON.parse("[\"{\\\"message\\\": \\\"Invalid or Expired Key\\\", \\\"title\\\": \\\"Message\\\", \\\"indicator\\\": \\\"red\\\", \\\"raise_exception\\\": 1}\"]")[0]).message)
            }
          }
        },
      },
    }
  })

  useEffect(() => {
    if (localStorage.lang === 'th'){
      i18n.changeLanguage('th')
    } else {
      i18n.changeLanguage('en')
    }
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider authConfig={authConfig}>
        <UserProvider>
          <ServiceProvider>
            <MemberProvider>
              <Router />
              {/* <switchContext.Provider value={[isSwitchModalOpen, setisSwitchModalOpen]}>

              <Sidebar loadingLogo={loadingLogo} />
              <TeamModal />
            </switchContext.Provider> */}

              {/* <MobileMenu /> */}
            </MemberProvider>
          </ServiceProvider>
        </UserProvider>
      </AuthProvider>
    </QueryClientProvider>
  );

}
export default App;