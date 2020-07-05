import React, { useCallback, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Alert from './Alert';
import Typography from './Typography';
import Picker from './Picker';
import { Translations } from '../utils';
import { useLanguageController } from '../hooks';

const Settings = ({ isVisible, onClose }) => {
  const { language, labels, changeLanguage } = useLanguageController();
  const [selectedLanguage, setSelectedLanguage] = useState(language);

  const handleConfirm = useCallback(() => {
    onClose();
    changeLanguage(selectedLanguage);
  });

  const handleLanguageChange = useCallback(({ value }) => {
    setSelectedLanguage(value);
  });

  const selectOptions = Object.keys(Translations);

  return (
    <Alert
      isVisible={isVisible}
      title={labels.settings}
      cancelText={labels.cancel}
      confirmText={labels.confirm}
      customView={(
        <View style={styles.formContainer}>
          <Typography
            fontWeight="bold"
          >
            {`${labels.language}:`}
          </Typography>
          <Picker
            data={selectOptions.map((option) => ({
              label: option.toUpperCase(),
              value: option.toLocaleLowerCase(),
              key: option.toLocaleLowerCase(),
            }))}
            initValue={selectedLanguage.toUpperCase()}
            onChange={handleLanguageChange}
          />
        </View>
      )}
      onDismiss={onClose}
      onCancelPressed={onClose}
      onConfirmPressed={handleConfirm}
    />
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
});

Settings.defaultProps = {
  isVisible: false,
};

Settings.propTypes = {
  isVisible: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

export default Settings;
