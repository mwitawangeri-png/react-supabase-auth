import { Routes, Route, Link } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";
import { Login } from "./features/auth/Login";
import './App.css'

export default function App(){
  return(
    <div>
      <nav style={{ padding: '10px', borderBottom: '1px solid #ccc', marginBottom: '20px' }}><Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/dashboard">Dashboard</Link></nav>   
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
    </div>
  );
}