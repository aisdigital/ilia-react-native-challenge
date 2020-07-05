import React from 'react';
import {
  FlatList, View, StyleSheet, RefreshControl,
} from 'react-native';
import PropTypes from 'prop-types';
import { useTheme } from '@react-navigation/native';

import Loading from './Loading';
import Typography from './Typography';

const List = ({
  data,
  isRefreshing,
  onRefresh,
  card: Card,
  onEndReached,
  isPaginating,
  contentContainerStyle,
  emptyMessage,
}) => {
  const theme = useTheme();

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      numColumns={2}
      refreshControl={(
        <RefreshControl
          refreshing={isRefreshing}
          tintColor={theme.colors.text}
          onRefresh={onRefresh}
          size={RefreshControl.LARGE}
        />
      )}
      data={data}
      renderItem={(payload) => <Card {...payload} />}
      keyExtractor={(item) => item.id.toString()}
      onEndReached={onEndReached}
      ListEmptyComponent={() => <EmptyComponent emptyMessage={emptyMessage} />}
      onEndReachedThreshold={0.4}
      contentContainerStyle={[styles.contentContainerStyle, contentContainerStyle]}
      ListFooterComponent={isPaginating && <PaginatingLoad />}
    />
  );
};

const PaginatingLoad = () => (
  <View style={styles.paginationContainer}>
    <Loading />
  </View>
);

const EmptyComponent = ({ emptyMessage }) => (
  <View
    style={styles.emptyContainer}
  >
    <Typography
      fontSize={20}
      fontWeight="bold"
      style={styles.emptyText}
    >
      {emptyMessage}
    </Typography>
  </View>
);

const styles = StyleSheet.create({
  contentContainerStyle: {
    minHeight: '100%',
  },
  paginationContainer: {
    paddingTop: 15,
    paddingBottom: 30,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    textAlign: 'center',
  },
});

EmptyComponent.propTypes = {
  emptyMessage: PropTypes.string.isRequired,
};

List.defaultProps = {
  onEndReached: () => { },
  contentContainerStyle: {},
  isPaginating: false,
  isRefreshing: false,
};

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  card: PropTypes.func.isRequired,
  onEndReached: PropTypes.func,
  isPaginating: PropTypes.bool,
  isRefreshing: PropTypes.bool,
  onRefresh: PropTypes.func.isRequired,
  emptyMessage: PropTypes.string.isRequired,
  contentContainerStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default List;
