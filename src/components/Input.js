import React, { useRef, useEffect, useCallback, useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { useField } from '@unform/core'
import { useTheme } from '@react-navigation/native'

const Input = ({ name, onDebounce, ...rest }) => {
  const inputRef = useRef(null)
  const theme = useTheme()
  const [timer, setTimer] = useState(null)

  const {
    fieldName, registerField, defaultValue
  } = useField(name)

  const handleChange = useCallback((value) => {
    clearTimeout(timer)
    if (inputRef.current) {
      inputRef.current.value = value
    }

    const newTimer = setTimeout(handleOnDebounce, 500)
    setTimer(newTimer)
  })

  const handleOnDebounce = useCallback(() => {
    onDebounce(inputRef.current.value)
  })

  useEffect(() => {
    inputRef.current.value = defaultValue
  }, [defaultValue])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      clearValue (ref) {
        ref.value = ''
        ref.clear()
      },
      setValue (ref, value) {
        ref.setNativeProps({ text: value })
        inputRef.current.value = value
      },
      getValue (ref) {
        return ref.value
      }
    })
  }, [fieldName, registerField])

  return (
    <View style={[
      styles.container,
      {
        borderColor: theme.colors.text
      }
    ]}
    >
      <TextInput
        ref={inputRef}
        style={{
          color: theme.colors.text
        }}
        keyboardAppearance='dark'
        defaultValue={defaultValue}
        placeholderTextColor={theme.colors.placeholder}
        onChangeText={handleChange}
        {...rest}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 5,
    borderWidth: 1,
    height: 40,
    paddingHorizontal: 10,
    justifyContent: 'center',
    backgroundColor: 'white'
  }
})

Input.defaultProps = {
  onDebounce: () => { }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  onDebounce: PropTypes.func
}

export default Input
