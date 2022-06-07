import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import LearnContext from './components/LearnContext';
import { Routes, Route, Link, Navigate } from "react-router-dom";

function App() {
  const token = localStorage.getItem("authToken");
  return(
    <>
    <Routes>
      {/* Protected route */}
      <Route path="/login" element={token ? <Navigate to="/" /> : <Login />} />
      <Route path="/signup" element={token ? <Navigate to="/" /> : <SignUp />} />
      <Route exact path="/" element={token ? <Home /> : <Navigate to="/login" />} />

      {/* public routes */}

    </Routes>
    </>
  )
}

export default App;
