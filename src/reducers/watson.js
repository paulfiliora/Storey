// import firebase from 'firebase'

const credentials = {
  "url": "https://gateway.watsonplatform.net/tone-analyzer/api",
  "username": "f26ec927-b4a8-4020-aaac-fcdf8df4df6e",
  "password": "V1FYHUEY6aPa"
}


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

const readCurrentUser = (state) => {
  console.log('in the right one')

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

const initialState = {
  user: [],
  books: []
}

const watsonTone = (state = initialState, action) => {
  switch (action.type) {
    case 'READ_ALL_USERS':
      return readAllUsers()
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
    default:
      return state
  }
}

export default watsonTone