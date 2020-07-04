import { ActionTypes } from '.'

export const changeLanguage = (language) => ({
  type: ActionTypes.CHANGE_LANGUAGE,
  payload: {
    language
  }
})
