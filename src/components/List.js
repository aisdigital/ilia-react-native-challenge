import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import Loading from './Loading'
import Typography from './Typography'

const List = ({ data, card: Card, onEndReached, isPaginating, contentContainerStyle, emptyMessage }) => {
  return (
    <FlatList
      numColumns={2}
      data={data}
      renderItem={(payload) => <Card {...payload} />}
      keyExtractor={(item) => item.id.toString()}
      onEndReached={onEndReached}
      ListEmptyComponent={() => <EmptyComponent emptyMessage={emptyMessage} />}
      onEndReachedThreshold={0.4}
      contentContainerStyle={[styles.contentContainerStyle, contentContainerStyle]}
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

const EmptyComponent = ({ emptyMessage }) => {
  return (
    <View
      style={styles.emptyContainer}
    >
      <Typography
        fontSize={20}
        fontWeight='bold'
        style={styles.emptyText}
      >
        {emptyMessage}
      </Typography>
    </View>
  )
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    minHeight: '100%'
  },
  paginationContainer: {
    paddingTop: 15,
    paddingBottom: 30
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyText: {
    textAlign: 'center'
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
  emptyMessage: PropTypes.string.isRequired,
  contentContainerStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}

export default List
