import { createContext, useContext, useState, type ReactNode } from "react";

interface SubscriptionContextType{
    isPremium: boolean;
    togglePremium:() => void;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

export function SubscriptionProvider({children}:{children: ReactNode}){
    const [isPremium, setIsPremium] = useState(false);

    const togglePremium = () => {
        setIsPremium((prev) => !prev);
    };

    return (
        <SubscriptionContext.Provider
        value={{ isPremium, togglePremium }}
            >
            {children}
        </SubscriptionContext.Provider>
    );
}

export function useSubscription(){
    const context = useContext(SubscriptionContext);

    if(!context){
        throw new Error('The hook must be used inside a SubscriptionProvider');
        ;
    }

    return context
}