import {
    createUserWithEmailAndPassword as _createUserWithEmailAndPassword,
    EmailAuthProvider,
    getAuth as _getAuth,
    GoogleAuthProvider,
    reauthenticateWithCredential,
    sendEmailVerification as _sendEmailVerification,
    sendPasswordResetEmail as _sendPasswordResetEmail,
    signInWithEmailAndPassword as _signInWithEmailAndPassword,
    signInWithPopup,
    signOut as _signOut,
    TwitterAuthProvider,
    updatePassword,
    updateProfile as _updateProfile,
} from "firebase/auth";

import app from "@/firebase/firebase.config";
const googleProvider = new GoogleAuthProvider();
const twitterProvider = new TwitterAuthProvider();

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

const handleAuthError = (error) => {
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
};

export const signUpwithGoogle = async () => {
    try {
        await signInWithPopup(auth, googleProvider);
        Router.push("/events");
    } catch (error) {
        handleAuthError(error);
    }
};

export const singUpWithTwitter = async () => {
    try {
        await signInWithPopup(auth, twitterProvider);
        Router.push("/events");
    } catch (error) {
        handleAuthError(error);
    }
};

export async function signIn(email, password) {
    return _signInWithEmailAndPassword(auth, email, password);
}

export async function updateProfile(data) {
    const fireBaseUser = auth.currentUser;
    await _updateProfile(fireBaseUser, {
        ...data,
    });
    return fireBaseUser;
}

export async function sendEmailVerification(user) {
    return _sendEmailVerification(user);
}

export async function signOut() {
    _signOut(auth);
}

export async function changePassword(password) {
    try {
        await updatePassword(auth.currentUser, password);
    } catch (error) {
        console.log(error);
    }
}

export async function confirmCurrentPassword(password) {
    const fireBaseUser = auth.currentUser;
    const credential = EmailAuthProvider.credential(
        fireBaseUser.email,
        password
    );
    let passwordConfirmed;

    try {
        await reauthenticateWithCredential(fireBaseUser, credential);
        passwordConfirmed = true;
    } catch (error) {
        passwordConfirmed = false;
    }

    return passwordConfirmed;
}

export async function sendPasswordResetEmail(email) {
    try {
        await _sendPasswordResetEmail(auth, email);
        return true;
    } catch {
        return false;
    }
}
