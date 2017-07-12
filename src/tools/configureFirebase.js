import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBz8iPTBOG3YhGB9H3nV5b--jgkZmEWRD4",
  authDomain: "scriptup-5c4f7.firebaseapp.com",
  databaseURL: "https://scriptup-5c4f7.firebaseio.com",
  projectId: "scriptup-5c4f7",
  storageBucket: "scriptup-5c4f7.appspot.com",
  messagingSenderId: "6187700744"
};
firebase.initializeApp(config);

export const database = firebase.database();
export const auth = firebase.auth();
