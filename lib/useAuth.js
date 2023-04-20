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
import Router from "next/router";

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
        Router.push("/events");
    } catch (error) {
        if (error.code === "auth/popup-closed-by-user") {
            alert("Sign in process was canceled by user");
        } else if (error.code === "auth/network-request-failed") {
            alert(
                "Failed to connect to the authentication server. Please check your network connection and try again."
            );
        } else if (error.code === "auth/internal-error") {
            alert(
                "An internal error occurred while processing your request. Please try again later."
            );
        } else {
            alert(error.message);
        }
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
