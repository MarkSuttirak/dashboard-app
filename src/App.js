import logo from './logo.svg';
import './App.scss';
import Sidebar from './components/sidebar';
import Dashboard from './pages/dashboard';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
