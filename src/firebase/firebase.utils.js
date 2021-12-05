import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyA-w-TlillsBMihLe33KqqQFyCdvATFQIY",
  authDomain: "clothing-ecommerce-db-be052.firebaseapp.com",
  projectId: "clothing-ecommerce-db-be052",
  storageBucket: "clothing-ecommerce-db-be052.appspot.com",
  messagingSenderId: "850015102231",
  appId: "1:850015102231:web:eaa096809ad102bf804352",
  measurementId: "G-8MNGRYB13K",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShow = await userRef.get();

  if (!snapShow.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(`Error creating user`, error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
