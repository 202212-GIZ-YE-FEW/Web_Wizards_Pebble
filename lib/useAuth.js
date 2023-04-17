import {
    createUserWithEmailAndPassword,
    getAuth,
    sendEmailVerification,
    signInWithEmailAndPassword,
} from "firebase/auth";

import app from "../firebase.config";

export const auth = getAuth(app);

export async function signUp(email, password, data) {
    const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
    );
    const { firstName, lastName } = data;
    user.displayName = `${firstName} ${lastName}`;
    sendEmailConfirmation(user);
}

export async function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

export async function sendEmailConfirmation(user) {
    return sendEmailVerification(user);
}
