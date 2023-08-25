import logo from './logo.svg';
import React, { useState } from "react";
import './App.scss';
import Sidebar from './components/sidebar';
import Dashboard from './pages/dashboard';
import ChangeDomain from './pages/changeDomain';
import Welcome from './pages/register/welcome';
import Register from './pages/register/setAccount';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Business from './pages/Business';
import BusinessDetail from './pages/BusinessDetail';
import TeamsPage from './pages/teams';
import { useEffect } from 'react';
import TeamModal from "./components/switchTeamModal";
import { createContext } from 'react';
import SingleAppPage from './pages/SingleAppPage';
import Settings from './pages/settings';
import Profile from './pages/profile';
import TeamsSettings from './pages/teamsSettings';
import BillingSettings from './pages/billingSettings';
import PlanSettings from './pages/planSettings';
import Integration from './pages/integration';
import ConnectedApps from './pages/connectedApps';

import TestPage from './pages/testPage';

export const switchContext = createContext();

function App() {
  const [isSwitchModalOpen, setisSwitchModalOpen] = useState(false);
  const [loadingLogo, setLoadingLogo] = useState(true);
  const timeout = setTimeout(() => {
    setLoadingLogo(false);
  }, 2020);
  useEffect(() => {
    return () => clearTimeout(timeout);
  }, []);

  // useEffect(() => {
  //   var hs = document.body.scrollWidth > document.body.clientWidth;
  //   var vs = document.body.scrollHeight > document.body.clientHeight;

  //   if (vs) {
  //     document.body.style.paddingRight = '17px';
  //   } else {
  //     document.body.style.paddingRight = '0';
  //   }
  // }, [])

  return (
    < >
      <Router>
        <switchContext.Provider value={[isSwitchModalOpen, setisSwitchModalOpen]}>

          <Sidebar loadingLogo={loadingLogo} />
          <TeamModal />
        </switchContext.Provider>
        <Routes>
          <Route path="/" element={<Dashboard loadingLogo={loadingLogo} />} />
          <Route path="/appsdetail" element={<BusinessDetail />} />
          <Route path="/apps" element={<Business />} />
          <Route path="/singleAppPage" element={<SingleAppPage />} />
          <Route path="/change-domain" element={<ChangeDomain />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/settings/profile" element={<Profile />} />
          <Route path="/settings/team" element={<TeamsSettings />} />
          <Route path="/settings/billing" element={<BillingSettings />} />
          <Route path="/settings/plan" element={<PlanSettings />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/integration" element={<Integration />} />
          <Route path="/integration/connected" element={<ConnectedApps />} />

          <Route path="/welcome" element={<Welcome />} />
          <Route path="/register" element={<Register />} />
          <Route path="/teams" element={<TeamsPage />} />
        </Routes>


      </Router>
    </>
  );
}

export default App;