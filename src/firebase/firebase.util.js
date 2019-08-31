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

  // take user auth object and store in database
  export const createUserProfileDocument = async (userAuth, additonalData) => {
    // user is signed out
    if(!userAuth) return;
    // user is signed in, get the reference object that points to the snapshot object
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    // get the document snapshot object
    const snapShot = await userRef.get()
    // if user doesn't exist in database
    if(!snapShot.exists) {
      // before we store new user data, need to see what data is needed to be used in order to create the actual document
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      // asynchronous request to database to actually store this data
      try {
        // await user ref, going to make an object containing these properties
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additonalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
    // allows us to use anywhere in our app, ex: setState with user data
    return userRef;
  } 

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