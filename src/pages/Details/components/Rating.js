import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { Typography } from '../../../components';

const Rating = ({ rating, ratingCount }) => (
  <View
    style={styles.container}
  >
    <Typography
      fontWeight="bold"
    >
      {`${rating}/10 (${ratingCount})`}
    </Typography>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    alignItems: 'center',
  },
});

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  ratingCount: PropTypes.number.isRequired,
};

export default Rating;
