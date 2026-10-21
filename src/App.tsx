import { Routes, Route, Link } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";
import { Login } from "./features/auth/Login";
import { ProtectedRoute } from "./features/auth/ProtectedRoute";
import { useAuth } from "./features/auth/AuthContext";
import { supabase } from "./supabase";
import './App.css'
import { ProDashboard } from "./pages/ProDashboard";

export default function App(){

  const {session} = useAuth();
  return(
    <div className="Body">
      <nav className='NavParent' style={{ padding: '10px', borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
        {(session)?<>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to ="/pro-dashboard">Pro Dashboard</Link>
          <button onClick={() => supabase.auth.signOut()}>Log Out</button>
        </>:<>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
        </>}

      </nav>   
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/pro-dashboard" element={<ProtectedRoute><ProDashboard/></ProtectedRoute>}/>
    </Routes>
    </div>
  );
}