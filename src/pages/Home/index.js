import React from 'react'
import { View, StyleSheet } from 'react-native'

import { List, LoadingWrapper } from '../../components'
import { MovieCard } from './components'
import { useMovies } from '../../hooks'

const Home = () => {
  const { movies, isLoading, isPaginating, paginate } = useMovies()

  return (
    <View
      style={styles.container}
    >
      <LoadingWrapper
        isLoading={isLoading}
      >
        {
          () =>
            <List
              data={movies}
              card={MovieCard}
              onEndReached={paginate}
              isPaginating={isPaginating}
            />
        }
      </LoadingWrapper>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default Home
