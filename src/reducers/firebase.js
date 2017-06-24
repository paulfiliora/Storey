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


const writeUserData = (userId, username, email) => {
  return database.ref('users/' + userId).set({
    username,
    email
  }).catch((err) => {
    console.log('Push to DB Failed: ', err);
    return err
  })
}

// const writeBookData = (bookId, chapterIndex, name, title, text) => {
//   return database.ref('book/' + bookId).set({
//     name,
//     chapters:[{ need something to target the right number
// title,
// text,
// }]
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
        .then(() => {
          return auth.onAuthStateChanged(user => {
            if (user) {
              window.location = '/UserPage';
            }
          });
        })
        .then((res) => {
          return authData
        })
    }).catch((err) => {
      // console.log('Signup User: ', err);
      return err
    })
}


const signInWithEmailAndPassword = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password)
    .then((authData) => {
      console.log('signed in: ', authData)
      return authData
    }).then(() => {
      return auth.onAuthStateChanged(user => {
        if (user) {
          window.location = '/UserPage';
        }
      });
    }).catch((err) => {
      console.log('Login Failed: ', err);
      return err
    })
}

const testFunction = (state) => {
  // const fetchBookData = (state) => {
  console.log(state.book)
  const user = firebase.auth().currentUser;
  // console.log(user)
  // return state

  return database.ref('/users/' + user.uid).once('value').then(function (snapshot) {
    return snapshot.val().book
  }).then((book) => {
    return database.ref('/books/' + book).once('value').then(function (snapshot) {
      return snapshot.val()
    })
  })
  .then((bookData) => {
    console.log('Book data: ', bookData)
    return Object.assign({}, state, {
      book: [
        ...state,
        {
          title: 'title'
        }
      ]
    })
  }).then((state) => {
    console.log(state)
    return state
  })
  .catch((err) => {
    console.log('Book data into state failed: ', err);
    return err
  })
}


const signOut = () => {
  return auth.signout().then((data) => {
    return data
  }).then(() => {
    return auth.onAuthStateChanged(user => {
      if (!user) {
        window.location = '/';
      }
    });
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

const readCurrentUser = (state) => {

  // firebase.auth().onAuthStateChanged(function (user) {
  //   if (user) {
  //     console.log(user.displayName)
  return Object.assign({}, state, {
    user: [
      ...state.user,
      {
        name: 'user.displayName',
      }
    ]
  })
}
// else {
// console.log('no user logged in')
// }
// }
// , function (error) {
//     })
// }

// const initialState = {
//   user: [],
//   book: []
// }

const firebaseDB = (state = [], action) => {
  switch (action.type) {
    // case 'READ_ALL_USERS':
    //   return readAllUsers()
    case 'READ_CURRENT_USER':
      return readCurrentUser(state, action)
    case 'CREATE_NEW_USER':
      return createUserWithEmailAndPassword(action.username, action.email, action.password)
    case 'LOGIN_USER':
      return signInWithEmailAndPassword(action.email, action.password)
    case 'LOGOUT_USER':
      return signOut()
    case 'DELETE_USER':
      return deleteAccount()
    case 'TEST_REDUCER':
      return testFunction(state)
    default:
      return state
  }
}

export default firebaseDB


// export const writePsetData = () => {}

// const readAllUsers = (state = {}, action) => {
//   const user = firebase.auth().currentUser;

//   if (user != null) {
//     return user.providerData.map(function (profile) {
//       console.log(" Sign-in provider: " + profile.providerId);
//       console.log(" Provider-specific UID: " + profile.uid);
//       console.log(" Name: " + profile.displayName);
//       console.log(" Email: " + profile.email);
//       console.log(" Photo URL: " + profile.photoURL)
//         ;
//     });
//   } else {
//     return console.log('No user signed in')
//   }

//   // return database.ref('/users').once('value').then(function (snapshot) {
//   //   console.log(snapshot.val());
//   // });
// }