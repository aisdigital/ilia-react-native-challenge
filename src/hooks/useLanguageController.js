import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reloadAsync } from 'expo-updates';
import moment from 'moment/min/moment-with-locales';

import { changeLanguage } from '../store/actions/Settings';

const useLanguageController = () => {
  const Settings = useSelector(({ Settings: SettingsState }) => SettingsState);
  const dispatch = useDispatch();

  const handleChangeLanguage = useCallback((language) => {
    dispatch(changeLanguage(language.toLowerCase()));
    reloadAsync();
  });

  useEffect(() => {
    moment.locale(Settings.language);
  }, [Settings.language]);

  return {
    language: Settings.language,
    labels: Settings.labels,
    changeLanguage: handleChangeLanguage,
  };
};

export default useLanguageController;
