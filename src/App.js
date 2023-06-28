import logo from './logo.svg';
import './App.scss';
import Sidebar from './components/sidebar';
import Dashboard from './pages/dashboard';
import AppsPage from './pages/apps';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Business from './pages/Business';

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/apps" element={<AppsPage />}/>
          <Route path="/business" element={<Business />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
