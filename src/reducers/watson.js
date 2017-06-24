//*************************************************/
//**********IBM Watson Tone Analysis***************/
//*************************************************/


const storeAnalysis = (state) => {
      console.log('Book data: ', bookData)
      return Object.assign({}, state, {
        toneAnalysis: [
          ...state,
          {
            toneAnalysis: 'title'
          }
        ]
      })
}

let initialState = [];
export const getInitialState = () => {
  return database.ref('/').once('value').then(snap => {
    initialState = snap.val();

    return initialState;
  });
}

const watson = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_ANALYSIS':
      return storeAnalysis(action.JSON)
    default:
      return state
  }
}



export default watson