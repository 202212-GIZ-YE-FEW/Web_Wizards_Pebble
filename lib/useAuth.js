import {
    createUserWithEmailAndPassword,
    getAuth,
    sendEmailVerification,
    signInWithEmailAndPassword,
} from "firebase/auth";

import app from "../firebase.config";

export const auth = getAuth(app);

export async function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

export async function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

export async function sendEmailConfirmation(user) {
	return sendEmailVerification(user);
}