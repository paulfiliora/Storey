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

// const database = firebase.database();

// function createNewUser(name, email, username) {
//   const newUserRef = database.ref('users').push();
//   const newUserKey = newUserRef.key;

//   database.ref('users').push({
//     userID: newUserKey,
//     name: name,
//     email: email,
//     username: username
//   });
// }

const createUserWithEmailAndPassword = (email, password, username) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((authData) => {
      const userData = {};
      if (!!username) {
        userData.displayName = username
      } else {
        userData.displayName = ''
      };
      return authData.updateProfile({
        displayName: userData.displayName
      })
        .then((res) => {
          console.log('created user');
          return authData
        })
    }).catch((err) => {
      console.log('Signup User: ', err);
      return err
    })
}

const loginWithEmailPassword = (email, password) => {
  return firebase.auth().loginWithEmailPassword(email, password)
    .then((authData) => {
      return authData
    }).catch((err) => {
      console.log('Login Failed: ', err);
      return err
    })
}

const logOut = (email, password) => {
  return firebase.auth().signout().then((data) => {
    return data
  }).catch((err) => {
    console.log('Signout failed: ', err)
    return err
  })
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
      return createUserWithEmailAndPassword(action.email, action.password, action.username)
    case 'LOGIN_USER':
      return loginWithEmailPassword(action.name, action.email)
    case 'LOGOUT_USER':
      return logOut(action.name, action.email)
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
