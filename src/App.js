import logo from './logo.svg';
import './App.scss';
import Sidebar from './components/sidebar';
import Dashboard from './pages/dashboard';
import AppsPage from './pages/apps';
import ChangeDomain from './pages/changeDomain';
import Welcome from './pages/register/welcome';
import Register from './pages/register/setAccount';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Business from './pages/Business';
import BusinessDetail from './pages/BusinessDetail';
import TeamsPage from './pages/teams';
import { useEffect } from 'react';

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/appsdetail" element={<BusinessDetail />}/>
          <Route path="/apps" element={<Business />}/>
          <Route path="/change-domain" element={<ChangeDomain />}/>

          <Route path="/welcome" element={<Welcome />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/teams" element={<TeamsPage />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;