import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'
import PropTypes from 'prop-types'

const Typography = ({ children, fontWeight, style, fontSize, ...rest }) => {
  const theme = useTheme()

  return (
    <Text
      {...rest}
      style={[
        { color: theme.text },
        styles.text,
        fontWeight && { fontWeight },
        fontSize && { fontSize },
        style
      ]}
    >
      {children.toString()}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16
  }
})

Typography.propTypes = {
  children: PropTypes.node.isRequired
}

export default Typography
