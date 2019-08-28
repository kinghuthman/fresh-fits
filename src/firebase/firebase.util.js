import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBHzSBa_i0RfVA9bkCs4qApjbgXSa19ie8",
    authDomain: "freshfits-13124.firebaseapp.com",
    databaseURL: "https://freshfits-13124.firebaseio.com",
    projectId: "freshfits-13124",
    storageBucket: "",
    messagingSenderId: "594307859094",
    appId: "1:594307859094:web:84100f180fc7193e"
  };

  firebase.initializeApp(config);

  // will be used anywhere authentication exists in the app
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  // google authentication utilities
  const provider = new firebase.auth.GoogleAuthProvider();
  
  // triggers the google pop up whenever google auth is used
  provider.setCustomParameters({ prompt: 'select_account' });

  // only google auth will pop up and none of the others avaialble from firebase
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;