import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { Loading } from "react-flatifycss";

import { auth, updateProfile } from "@/firebase/auth";

export const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = (props) => {
    const { children } = props;
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            saveUser(user);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const updateUser = async (data) => {
        const fireBaseUser = await updateProfile({
            ...data,
        });
        saveUser(fireBaseUser);
    };

    const saveUser = (_user) => {
        if (!_user) {
            setUser(null);
            return;
        }
        setUser({
            uid: _user.uid,
            displayName: _user.displayName,
            photoURL: _user.photoURL,
            emailVerified: _user.emailVerified,
        });
    };

    return (
        <AuthContext.Provider value={{ user, updateUser, loading }}>
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
