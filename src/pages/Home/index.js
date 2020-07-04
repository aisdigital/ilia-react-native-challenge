import React, { useCallback } from 'react'
import { View, StyleSheet } from 'react-native'

import { List, LoadingWrapper } from '../../components'
import { MovieCard, SearchBar } from './components'
import { useMovies } from '../../hooks'

const Home = () => {
  const {
    movies,
    isLoading,
    isPaginating,
    paginate,
    searchMovies
  } = useMovies()

  const handleSearchSubmit = useCallback((title) => {
    searchMovies({
      title
    })
  })

  return (
    <View
      style={styles.container}
    >
      <SearchBar
        onSubmit={handleSearchSubmit}
      />
      <View
        style={styles.listContainer}
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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listContainer: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default Home
