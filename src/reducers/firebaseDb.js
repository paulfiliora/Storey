// import firebase from 'firebase'

// const config = {
//   apiKey: "AIzaSyBz8iPTBOG3YhGB9H3nV5b--jgkZmEWRD4",
//   authDomain: "scriptup-5c4f7.firebaseapp.com",
//   databaseURL: "https://scriptup-5c4f7.firebaseio.com",
//   projectId: "scriptup-5c4f7",
//   storageBucket: "scriptup-5c4f7.appspot.com",
//   messagingSenderId: "6187700744"
// };
// firebase.initializeApp(config);

// const database = firebase.database();
// const auth = firebase.auth();
import {auth, database } from '../tools/configureFirebase'


//*************************************************/
//***************Database Logic ******************/
//*************************************************/


const testFunction = (state) => {
  // const fetchBookData = (state) => {
  // console.log(state.book)
  const user = auth.currentUser;
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

const getUsersBook = (state) => {
  // const fetchBookData = (state) => {
  // console.log(state)
  const user = auth.currentUser;
  // console.log(user)
  // return state

  return database.ref('/users/' + user.uid).once('value').then(function (snapshot) {
    return snapshot.val().book
  }).then((book) => {
    return database.ref('/books/' + book).once('value').then(function (snapshot) {
      console.log(snapshot.val())
      return snapshot.val()
    })
  })
    // .then((bookData) => {
    //   console.log('Book data: ', bookData)
    //   return Object.assign({}, state, {
    //     book: [
    //       ...state,
    //       {
    //         title: 'title'
    //       }
    //     ]
    //   })
    // }).then((state) => {
    //   console.log(state)
    //   return state
    // })
    .catch((err) => {
      console.log('Book data into state failed: ', err);
      return err
    })
}

const writeUserData = (userId, username, email) => {
  return database.ref('users/' + userId).set({
    username,
    email
  }).catch((err) => {
    console.log('Push to DB Failed: ', err);
    return err
  })
}

const writeNewChapter = (title) => {
  const bookId = '-KnLjyje2E3iy_1ircEG'
  return database.ref('books/' + bookId + '/chapters').push({
    title: '',
    text: ``
  }).catch((err) => {
    console.log('Push to DB Failed: ', err);
    return err
  })
}

const writeInChapter = (text) => {
  const bookId = '-KnLjyje2E3iy_1ircEG'
  const chapterId = '-KnN1rmnHZWll8QQBafy'
  return database.ref('books/' + bookId + '/chapters/' + chapterId).set({
    title: '1 Intro',
    text
  }).catch((err) => {
    console.log('Push to DB Failed: ', err);
    return err
  })
}

let initialState = [];
export const getInitialState = () => {
  return database.ref('/').once('value').then(snap => {
    initialState = snap.val();

    return initialState;
  });
}

const firebaseDB = (state = initialState, action) => {
  switch (action.type) {
    case 'TEST_REDUCER':
      return testFunction(state)
    case 'GET_BOOK':
      return getUsersBook(state)
    case 'NEW_CHAPTER':
      return writeNewChapter(action.title)
    case 'UPDATE_CHAPTER_TEXT':
      return writeInChapter(action.text)
    default:
      return state
  }
}

export default firebaseDB









//*************************************************/
//********** Temporarily Omitted Code ************/
//*************************************************/


// const readCurrentUser = (state) => {

//   // firebase.auth().onAuthStateChanged(function (user) {
//   //   if (user) {
//   //     console.log(user.displayName)
//   return Object.assign({}, state, {
//     user: [
//       ...state.user,
//       {
//         name: 'user.displayName',
//       }
//     ]
//   })
// }
// // else {
// // console.log('no user logged in')
// // }
// // }
// // , function (error) {
// //     })
// // }

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
