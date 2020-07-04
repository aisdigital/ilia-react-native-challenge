import React from 'react'
import { StyleSheet } from 'react-native'
import AwesomeAlert from 'react-native-awesome-alerts'
import { useTheme } from '@react-navigation/native'
import PropTypes from 'prop-types'

const Alert = ({ isVisible, title, onDismiss, customView, cancelText, confirmText, onCancelPressed, onConfirmPressed }) => {
  const theme = useTheme()

  return (
    <AwesomeAlert
      show={isVisible}
      showProgress={false}
      titleStyle={[
        styles.title,
        { color: theme.colors.text }
      ]}
      title={title}
      customView={customView}
      closeOnTouchOutside
      onDismiss={onDismiss}
      closeOnHardwareBackPress={false}
      showCancelButton
      showConfirmButton
      cancelText={cancelText}
      confirmText={confirmText}
      cancelButtonTextStyle={[
        styles.buttonText,
        { color: theme.colors.text }
      ]}
      confirmButtonTextStyle={[
        styles.buttonText,
        styles.confirmButtonText
      ]}
      cancelButtonColor='rgba(0,0,0,0)'
      confirmButtonColor={theme.colors.primary}
      onCancelPressed={onCancelPressed}
      onConfirmPressed={onConfirmPressed}
      actionContainerStyle={styles.actionContainer}
    />
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  confirmButtonText: {
    color: 'white'
  },
  actionContainer: {
    justifyContent: 'space-between'
  }
})

Alert.defaultProps = {
  isVisible: false
}

Alert.propTypes = {
  isVisible: PropTypes.bool,
  title: PropTypes.string.isRequired,
  onDismiss: PropTypes.func.isRequired,
  customView: PropTypes.node.isRequired,
  cancelText: PropTypes.string.isRequired,
  confirmText: PropTypes.string.isRequired,
  onCancelPressed: PropTypes.func.isRequired,
  onConfirmPressed: PropTypes.func.isRequired
}

export default Alert
