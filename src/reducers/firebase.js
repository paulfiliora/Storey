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
const auth = firebase.auth()


// export const writePsetData = () => {
//   // const newUserRef = database.ref('users').push();
//   // const newUserKey = newUserRef.key;

//   database.ref('psets').push({
//     url:"google.com"
//   }).catch((err) => {
//     console.log('Push to DB Failed: ', err);
//     return err})
// }

const writeUserData = (userId, username, email) => {
  return database.ref('users/' + userId).set({
    username,
    email
  }).catch((err) => {
    console.log('Push to DB Failed: ', err);
    return err
  })
}

// const writePsetData = (username, email) => {
//   return database.ref('pset/').set({
//     username,
//     email
//   }).catch((err) => {
//     console.log('Push to DB Failed: ', err);
//     return err
//   })
// }

const createUserWithEmailAndPassword = (username, email, password) => {
  return auth.createUserWithEmailAndPassword(email, password)
    .then((authData) => {
      const userData = {};
      if (!!username) {
        userData.displayName = username
      } else {
        userData.displayName = ''
      };
      return authData.updateProfile({
        displayName: userData.displayName
      }).then((res => {
          const user = auth.currentUser;
          return writeUserData(user.uid, user.displayName, user.email)
        }))
        .then((res => {
          const user = auth.currentUser;
          return user.sendEmailVerification()
        }))
        .then((res) => {
          console.log('created user');
          return authData
        })
    }).catch((err) => {
      console.log('Signup User: ', err);
      return err
    })
}


const signInWithEmailAndPassword = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password)
    .then((authData) => {
      console.log('signed in: ', authData)
      return authData
    }).catch((err) => {
      console.log('Login Failed: ', err);
      return err
    })
}

const signOut = () => {
  return auth.signout().then((data) => {
    return data
  }).catch((err) => {
    console.log('Signout failed: ', err)
    return err
  })
}

const deleteAccount = () => {
  const user = auth.currentUser;
  return user.delete().then((data) => {
    return data
  }).catch((err) => {
    console.log('Delete failed: ', err);
    return err
  })
}

// export const writePsetData = () => {

export const readAllUsers = (state = {}, action) => {
const user = firebase.auth().currentUser;

if (user != null) {
  return user.providerData.forEach(function (profile) {
    console.log("Sign-in provider: "+profile.providerId);
    console.log("  Provider-specific UID: "+profile.uid);
    console.log("  Name: "+profile.displayName);
    console.log("  Email: "+profile.email);
    console.log("  Photo URL: "+profile.photoURL);
  });
} else {
  return console.log('No user signed in')
}

  // return database.ref('/users').once('value').then(function (snapshot) {
  //   console.log(snapshot.val());
  // });
}


export const readCurrentUser = (state = {}, action) => {

  const user = firebase.auth().currentUser;
    return database.ref('/users/' + user.uid).once('value').then(function (snapshot) {
      return snapshot.val().psets
  }).then((psets) => {
    return database.ref('/psets/' + psets).once('value').then(function (snapshot){
      console.log(snapshot.val())
    })
  })

.catch((err) => {
    console.log('error ', err);
    return err
  })
}

const firebaseDB = (state = [], action) => {
  switch (action.type) {
    case 'READ_ALL_USERS':
      return readAllUsers()
    case 'READ_CURRENT_USER':
      return readCurrentUser()
    case 'CREATE_NEW_USER':
      return createUserWithEmailAndPassword(action.username, action.email, action.password)
    case 'LOGIN_USER':
      return signInWithEmailAndPassword(action.email, action.password)
    case 'LOGOUT_USER':
      return signOut()
    case 'DELETE_USER':
      return deleteAccount()
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
