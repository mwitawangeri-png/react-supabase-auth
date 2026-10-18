import { useState } from "react";
import { supabase } from "../../supabase";

export function Login() {

    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {error} = await supabase.auth.signUp({
        email: email,
        password: password
    });

    if(error){
        console.log(error.message);
    }else{
        console.log('Account successfully created');
    }
  };
  return (
    /* 1. Page wrapper that perfectly centers everything on the screen */
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '80vh', /* Centers vertically on the screen */
      fontFamily: 'sans-serif'
    }}>
      
      <h2 style={{ marginBottom: '20px' }}>LOGIN</h2>
      
      {/* 2. Main Form Card Wrapper */}
      <form style={{
        width: '100%',
        maxWidth: '400px',
        padding: '30px',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}
      onSubmit={handleSubmit}
      >
        
        {/* Email Field Group */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label htmlFor="email" style={{ fontWeight: '500', fontSize: '14px', width: 'fit-content'}}>Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter email address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            required
          />
        </div>

        {/* Password Field Group */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label htmlFor="password" style={{ fontWeight: '500', fontSize: '14px', width:'fit-content'}}>Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)} /* Fixed state bug here */
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            required
          />
        </div>

        {/* Submit Button */}
        <button 
        style={{
          padding: '12px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontWeight: 'bold',
          cursor: 'pointer',
          marginTop: '10px'
        }}>
          Submit
        </button>
      </form>
      {}
    </div>
  );
}
