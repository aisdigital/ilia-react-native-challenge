import React, { useCallback } from 'react'
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import PropTypes from 'prop-types'

import { Typography, ImageBackground, StarRating } from '../../../components'

const { height } = Dimensions.get('window')

const MovieCard = ({ item }) => {
  const navigation = useNavigation()

  const handlePress = useCallback(() => {
    navigation.navigate('Details', {
      id: item.id
    })
  })

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
    >
      <ImageBackground
        source={{
          uri: item.image
        }}
        resizeMode='cover'
        style={styles.image}
      >
        <View
          style={styles.textContainer}
        >
          <Typography
            fontWeight='bold'
            style={styles.title}
          >
            {item.title}
          </Typography>
          <StarRating
            containerStyle={styles.starsContainer}
            rating={item.rating}
          />
        </View>
      </ImageBackground>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height / 3
  },
  image: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  textContainer: {
    padding: 5
  },
  title: {
    backgroundColor: 'rgba(255, 255, 255, .8)',
    textAlign: 'center'
  },
  starsContainer: {
    backgroundColor: 'rgba(255, 255, 255, .8)',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

MovieCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    image: PropTypes.string,
    rating: PropTypes.number
  }).isRequired
}

export default MovieCard
