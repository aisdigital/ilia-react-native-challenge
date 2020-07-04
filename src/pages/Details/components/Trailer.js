import React, { useState, useCallback } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import WebView from 'react-native-webview'
import { useTheme } from '@react-navigation/native'
import PropTypes from 'prop-types'

import { Loading } from '../../../components'

const { height } = Dimensions.get('window')

const Trailer = ({ trailer }) => {
  const theme = useTheme()
  const [isLoadingTrailer, setIsLoadingTrailer] = useState(true)

  const handleTrailerLoadStart = useCallback(() => {
    setIsLoadingTrailer(true)
  })

  const handleTrailerLoadEnd = useCallback(() => {
    setIsLoadingTrailer(false)
  })

  return (
    <View style={[
      styles.container,
      { backgroundColor: theme.colors.background },
      isLoadingTrailer && styles.videoContainerIsLoading
    ]}
    >
      <WebView
        onLoadStart={handleTrailerLoadStart}
        onLoadEnd={handleTrailerLoadEnd}
        javaScriptEnabled
        source={{
          uri: trailer
        }}
      />
      {isLoadingTrailer &&
        <View style={styles.loadingContainer}>
          <Loading />
        </View>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: height / 4
  },
  videoContainerIsLoading: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingContainer: {
    position: 'absolute'
  }
})

Trailer.propTypes = {
  trailer: PropTypes.string.isRequired
}

export default Trailer
