import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { Typography } from '../../../components';

const InfoRow = ({ title, value }) => (
  <View
    style={styles.container}
  >
    <Typography
      fontWeight="bold"
      fontSize={18}
    >
      {`${title}:`}
    </Typography>
    <Typography
      fontSize={18}
      style={styles.value}
    >
      {value}
    </Typography>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    flexDirection: 'row',
  },
  value: {
    paddingLeft: 5,
  },
});

InfoRow.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default InfoRow;
