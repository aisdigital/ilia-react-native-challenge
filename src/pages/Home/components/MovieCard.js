import React from 'react'
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import StarRating from 'react-native-star-rating'
import { useTheme } from '@react-navigation/native'

import { Typography, ImageBackground } from '../../../components'

const { height } = Dimensions.get('window')

const MovieCard = ({ item }) => {
  const theme = useTheme()

  return (
    <TouchableOpacity
      style={styles.container}
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
            halfStarColor={theme.colors.text}
            emptyStarColor={theme.colors.text}
            fullStarColor={theme.colors.text}
            maxStars={10}
            starSize={16}
            disabled
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

export default MovieCard
