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
console.log('------ loading')
const database = firebase.database();

// export function createNewUser(name, email) {
//   const newUserRef = database.ref('users').push();
//   const newUserKey = newUserRef.key;

//   database.ref('users').push({
//     userID: newUserKey,
//     username: name,
//     email: email
//   });
// }


export function readAllUsers(state = {}, action) {
      console.log('in authReducer');
    if (Object.keys(state).length === 0) {
        console.log('about to stop tho')
        return state;
    }
  return firebase.database().ref('/users').once('value').then(function (snapshot) {
    console.log(snapshot.val());
  });
}

// export function createNewUser(oldStore, options) {
//   console.log('in reducer')
//   const { name, email } = options;
//   const { users } = oldStore;

//   const newUserRef = database.ref('users').push();
//   const newUserKey = newUserRef.key;

//   return Promise.resolve().then(_ => {
//     database.ref('users').push({
//       userID: newUserKey,
//       username: name,
//       email: email
//     });

//     return Object.assign({}, oldStore, {
//       users
//     });
//   })
// }

export function createNewUser(oldStore, options) {
  const { name, email } = options;
  // console.log(options)

  const newUserRef = database.ref('users').push();
  const newUserKey = newUserRef.key;

  database.ref('users').push({
    userID: newUserKey,
    username: name,
    email: email
  });
}