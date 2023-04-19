import {
    createUserWithEmailAndPassword as _createUserWithEmailAndPassword,
    getAuth as _getAuth,
    GoogleAuthProvider,
    sendEmailVerification as _sendEmailVerification,
    signInWithEmailAndPassword as _signInWithEmailAndPassword,
    signInWithPopup,
    signOut as _signOut,
    updateProfile as _updateProfile,
} from "firebase/auth";

import app from "../firebase.config";
const googleProvider = new GoogleAuthProvider();

export const auth = _getAuth(app);

export async function signUp(email, password, data) {
    const { user } = await _createUserWithEmailAndPassword(
        auth,
        email,
        password
    );
    await updateProfile(user, data);
    sendEmailVerification(user);
}
export const signUpwithGoogle = async () => {
    try {
        await signInWithPopup(auth, googleProvider);
    } catch (err) {
        console.error(err);
    }
};

export async function signIn(email, password) {
    return _signInWithEmailAndPassword(auth, email, password);
}

export async function updateProfile(user, data) {
    const { firstName, lastName } = data;
    await _updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
    });
}

export async function sendEmailVerification(user) {
    return _sendEmailVerification(user);
}

export async function signOut() {
    _signOut(auth);
}
