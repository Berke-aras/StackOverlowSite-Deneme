import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import toast from "react-hot-toast";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA-dLQlOC8WRqFeJjijIJX4GkjxVlReBMI",
    authDomain: "soff-1460e.firebaseapp.com",
    projectId: "soff-1460e",
    storageBucket: "soff-1460e.appspot.com",
    messagingSenderId: "543207911570",
    appId: "1:543207911570:web:c14e8959dc324c46d5f64b",
    measurementId: "G-RF081RGTMZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();

export const register = async (email, password) => {
    try {
        const { user } = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        return user;
    } catch (error) {
        toast.error(error.message);
    }
};

export const login = async (email, password) => {
    try {
        const { user } = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        return user;
    } catch (error) {
        toast.error(error.message);
    }
};

export const logout = async () => {
    try {
        await signOut(auth);
        return true;
    } catch (error) {
        toast.error(error.message);
    }
};
export default app;
