import React, { useCallback, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import Picker from 'react-native-picker-select'
import { useTheme } from '@react-navigation/native'
import PropTypes from 'prop-types'

import Alert from './Alert'
import Typography from './Typography'
import { Translations } from '../utils'
import { useLanguageController } from '../hooks'

const Settings = ({ isVisible, onClose }) => {
  const theme = useTheme()
  const { language, labels, changeLanguage } = useLanguageController()
  const [selectedLanguage, setSelectedLanguage] = useState(language)

  const handleConfirm = useCallback(() => {
    onClose()
    changeLanguage(selectedLanguage)
  })

  const handleLanguageChange = useCallback((value) => {
    setSelectedLanguage(value)
  })

  const selectOptions = Object.keys(Translations)

  return (
    <Alert
      isVisible={isVisible}
      title={labels.settings}
      cancelText={labels.cancel}
      confirmText={labels.confirm}
      customView={(
        <View style={styles.formContainer}>
          <Typography
            fontWeight='bold'
          >
            {`${labels.language}:`}
          </Typography>
          <Picker
            placeholder={{}}
            style={{
              inputIOS: {
                textDecorationLine: 'underline',
                fontSize: 16,
                fontWeight: 'bold',
                color: theme.colors.text
              },
              inputAndroid: {
                textDecorationLine: 'underline',
                fontSize: 16,
                fontWeight: 'bold',
                color: theme.colors.text
              }
            }}
            value={selectedLanguage}
            onValueChange={handleLanguageChange}
            items={selectOptions.map(option => ({
              label: option.toUpperCase(),
              value: option.toLocaleLowerCase(),
              key: option.toLocaleLowerCase()
            }))}
          />
        </View>
      )}
      onDismiss={onClose}
      onCancelPressed={onClose}
      onConfirmPressed={handleConfirm}
    />
  )
}

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15
  }
})

Settings.defaultProps = {
  isVisible: false
}

Settings.propTypes = {
  isVisible: PropTypes.bool,
  onClose: PropTypes.func.isRequired
}

export default Settings
