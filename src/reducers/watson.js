//*************************************************/
//**********IBM Watson Tone Analysis***************/
//*************************************************/


const storeAnalysis = (state, analysisData) => {
  return Object.assign({}, state, {
    analysisData
  })
}

let initialState = {
  analysisData: {
    1: {
      document_tone: {
        tone_categories: {
          0: {
            tones: {
              0: {
                score: 0.01
              },
              1: {
                score: 0.01
              },
              2: {
                score: 0.01
              },
              3: {
                score: 0.01
              },
              4: {
                score: 0.01
              },
            }
          }
        }
      }
    }
  }



  // .watson.analysisData[1].document_tone.tone_categories["0"].tones["0"].score
}

const watson = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_ANALYSIS':
      return storeAnalysis(state, action.analysisData)
    default:
      return state
  }
}



export default watson