import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { reloadAsync } from 'expo-updates'

import { changeLanguage } from '../store/actions/Settings'

const useLanguageController = () => {
  const Settings = useSelector(({ Settings }) => Settings)
  const dispatch = useDispatch()

  const handleChangeLanguage = useCallback((language) => {
    dispatch(changeLanguage(language.toLowerCase()))
    reloadAsync()
  })

  return {
    language: Settings.language,
    labels: Settings.labels,
    changeLanguage: handleChangeLanguage
  }
}

export default useLanguageController
