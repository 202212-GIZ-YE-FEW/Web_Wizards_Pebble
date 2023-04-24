import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { Loading } from "react-flatifycss";

import { auth } from "../../lib/useAuth";

export const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = (props) => {
    const { children } = props;
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setLoading(false);
            } else {
                setUser(null);
                setLoading(false);
            }
        });
        return () => unsubscribe();
    }, []);
    return (
        <AuthContext.Provider value={{ user }}>
            {loading && (
                <div className='fixed h-screen w-screen bg-slate-50 bg-opacity-[97%] z-50'>
                    <div className='absolute h-full w-full top-2/4 left-2/4'>
                        <Loading
                            spinner
                            size='lg'
                            theme='orange'
                            aria-label='loading'
                        />
                    </div>
                </div>
            )}
            {children}
        </AuthContext.Provider>
    );
};
