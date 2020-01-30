import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAA1XYRi8fjlrCmmmh2irhDMVDEaVsA0r8",
  authDomain: "crwn-db-a9fe0.firebaseapp.com",
  databaseURL: "https://crwn-db-a9fe0.firebaseio.com",
  projectId: "crwn-db-a9fe0",
  storageBucket: "crwn-db-a9fe0.appspot.com",
  messagingSenderId: "567131165296",
  appId: "1:567131165296:web:3925e64eea239c92429ab5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const createUserProfileDocument = async (userAuth, additionalData) => {

  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exist) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error while creating user", error.message);
    }
  }

  return userRef;
};

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
