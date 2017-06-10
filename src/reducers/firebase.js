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

const database = firebase.database();


function createNewUser(name, email) {
  const newUserRef = database.ref('users').push();
  const newUserKey = newUserRef.key;

  database.ref('users').push({
    userID: newUserKey,
    username: name,
    email: email
  });
}

function readAllUsers(state = {}, action) {
  return firebase.database().ref('/users').once('value').then(function (snapshot) {
    console.log(snapshot.val());
  });
}


const firebaseDB = (state = [], action) => {
  switch (action.type) {
    case 'READ_ALL_USERS':
      return readAllUsers()
    case 'CREATE_NEW_USER':
          // return console.log(action)
      return createNewUser(action.name, action.email)
    default:
      return state
  }
}

export default firebaseDB





// const todo = (state = {}, action) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return {
//         id: action.id,
//         text: action.text,
//         completed: false
//       }
//     case 'TOGGLE_TODO':
//       if (state.id !== action.id) {
//         return state
//       }

//       return Object.assign({}, state, {
//         completed: !state.completed
//       })

//     default:
//       return state
//   }
// }

// const firebaseDB = (state = [], action) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return [
//         ...state,
//         readAllUsers()
//       ]
//     case 'CREATE_NEW_USER':
//       return state.map(t =>
//         todo(t, action)
//       )
//     default:
//       return state
//   }
// }
