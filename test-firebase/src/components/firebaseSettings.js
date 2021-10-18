// import * as firebase from 'firebase';
// import 'firebase/auth'
// import 'firebase/compat/app'
import firebase from 'firebase/compat';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAujeMw_i-duoq2NvcAPjm5yWP7j9bZi10",
    authDomain: "react-test-auth-7b3e9.firebaseapp.com",
    projectId: "react-test-auth-7b3e9",
    storageBucket: "react-test-auth-7b3e9.appspot.com",
    messagingSenderId: "291317551492",
    appId: "1:291317551492:web:245f06b60ddbd2c5bd4dd1",
    measurementId: "G-JYZEN4QMYZ"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();

const signInWithGoogle = async () => {
    try {
        const res = await auth.signInWithPopup(googleProvider);
        const user = res.user;
        const query = await db
            .collection("users")
            .where("uid", "==", user.uid)
            .get();
        if (query.docs.length === 0) {
            await db.collection("users").add({
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email
            });
        }

    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const signInWithEmailAndPassword = async (email, password) => {
    try {
        await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await auth.createUserWithEmailAndPassword(email, password);
        const user = res.user;
        await db.collection("users").add({
            uid: user.uid,
            name,
            authProvider: "local",
            email
        })
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const sendPasswordResetEmail = async (email) => {
    try {
        await auth.sendPasswordResetEmail(email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};
const logout = () => {
    auth.signOut();
};
export {
    auth,
    db,
    signInWithGoogle,
    signInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordResetEmail,
    logout,
};

