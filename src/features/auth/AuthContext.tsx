import { createContext, useEffect, useState, type ReactNode } from "react";
import { type Session } from '@supabase/supabase-js';
import {supabase} from '../../supabase'

interface AuthContextType {
   session: Session | null 
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
export function AuthProvider({children}:{children: ReactNode} ){
    const  [session, setSession] = useState<Session | null>(null);
    useEffect(() => {
    supabase.auth.getSession().then(({data: {session}}) => {
        setSession(session);
    });
const {data: {subscription}} = supabase.auth.onAuthStateChange( (_event, session) => {
    setSession(session);
});

return () => subscription.unsubscribe();
    },[])
    return(
        <AuthContext.Provider
        
        value={{ session}}>
            {children}
        </AuthContext.Provider>
    )
}