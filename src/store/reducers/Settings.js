import { ActionTypes } from '../actions'
import { Translations } from '../../utils'

const initialState = {
  language: 'en',
  labels: {
    ...Translations.en
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_LANGUAGE:
      return {
        ...initialState,
        language: action.payload.language,
        labels: Translations[action.payload.language]
      }
    default:
      return state
  }
}

export default reducer
