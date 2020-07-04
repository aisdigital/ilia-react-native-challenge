import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const useLanguageController = () => {
  const Settings = useSelector(({ Settings }) => Settings)
  const dispatch = useDispatch()

  const changeLanguage = useCallback((language) => {
    dispatch(changeLanguage(language))
  })

  return {
    language: Settings.language,
    labels: Settings.labels,
    changeLanguage
  }
}

export default useLanguageController
