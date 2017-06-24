//*************************************************/
//**********IBM Watson Tone Analysis***************/
//*************************************************/


const storeAnalysis = (state) => {
  console.log('Tone data: ')
  return Object.assign({}, state, {
    toneAnalysis: [
      ...state,
      {
        toneAnalysis: ''
      }
    ]
  })
}

// let initialState = [toneAnalysis = []];


const watson = (state = [], action) => {
  switch (action.type) {
    case 'STORE_ANALYSIS':
      return storeAnalysis(action.JSON)
    default:
      return state
  }
}



export default watson