import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { Typography } from '../../../components';

const Overview = ({ overview }) => (
  <View
    style={styles.container}
  >
    <Typography
      fontSize={18}
    >
      {overview}
    </Typography>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
  },
});

Overview.propTypes = {
  overview: PropTypes.string.isRequired,
};

export default Overview;
