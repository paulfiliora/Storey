import {auth, database } from '../tools/configureFirebase'
// import {getInitialState} from './firebaseDb'

//*************************************************/
//***************User Firebase-Auth Logic ******************/
//*************************************************/

const writeUserData = (userId, username, email) => {
  return database.ref('users/' + userId).set({
    username,
    email
  }).catch((err) => {
    console.log('Push to DB Failed: ', err);
    return err
  })
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
      return err
    })
}
const signInWithEmailAndPassword = (state, email, password) => {
  return auth.signInWithEmailAndPassword(email, password)
    .then((authData) => {
      console.log('signed in: ', authData)
      return authData
    }).then(() => {
      return auth.onAuthStateChanged(user => {
        if (user) {
          window.location = '/UserPage';
          return Object.assign({}, state, {
            user: [
              ...state,
              {
                name: user.displayName,
              }
            ]
          })
        }
      });
    })
    .catch((err) => {
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
    return err
  })
}

const deleteAccount = () => {
  const user = auth.currentUser;
  return user.delete().then((data) => {
    return data
  }).catch((err) => {
    return err
  })
}


const firebaseAuth = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_NEW_USER':
      return createUserWithEmailAndPassword(action.username, action.email, action.password)
    case 'LOGIN_USER':
      return signInWithEmailAndPassword(state, action.email, action.password)
    case 'LOGOUT_USER':
      return signOut()
    case 'DELETE_USER':
      return deleteAccount()
    default:
      return state
  }
}

export default firebaseAuth