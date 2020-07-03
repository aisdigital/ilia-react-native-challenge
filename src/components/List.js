import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import Loading from './Loading'

const List = ({ data, card: Card, onEndReached, isPaginating, contentContainerStyle }) => {
  return (
    <FlatList
      numColumns={2}
      data={data}
      renderItem={(payload) => <Card {...payload} />}
      keyExtractor={(item) => item.id.toString()}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.4}
      contentContainerStyle={contentContainerStyle}
      ListFooterComponent={isPaginating && <PaginatingLoad />}
    />
  )
}

const PaginatingLoad = () => {
  return (
    <View style={styles.paginationContainer}>
      <Loading />
    </View>
  )
}

const styles = StyleSheet.create({
  paginationContainer: {
    paddingTop: 15,
    paddingBottom: 30
  }
})

List.defaultProps = {
  onEndReached: () => { },
  contentContainerStyle: {},
  isPaginating: false
}

List.propTypes = {
  data: PropTypes.array.isRequired,
  card: PropTypes.func.isRequired,
  onEndReached: PropTypes.func,
  isPaginating: PropTypes.bool,
  contentContainerStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}

export default List
