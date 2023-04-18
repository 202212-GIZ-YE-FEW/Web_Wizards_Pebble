import {
    createUserWithEmailAndPassword,
    getAuth,
    sendEmailVerification,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";

import app from "../firebase.config";

export const auth = getAuth(app);

export async function signUp(email, password, data) {
    const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
    );
    await updateUser(user, data);
    sendEmailConfirmation(user);
}

export async function signInWithEmailAndPass(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

export async function updateUser(user, data) {
    const { firstName, lastName } = data;
    await updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
    });
}

export async function sendEmailConfirmation(user) {
    return sendEmailVerification(user);
}
