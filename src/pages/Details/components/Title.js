import React, { useState, useCallback, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, Linking } from 'react-native';
import PropTypes from 'prop-types';

import { Typography } from '../../../components';

const Title = ({ title, homepage }) => {
  const [canOpen, setCanOpen] = useState(false);

  const loadURLPermission = useCallback(async () => {
    try {
      const canOpenURL = await Linking.canOpenURL(homepage);
      setCanOpen(canOpenURL);
    } catch (e) {
      setCanOpen(false);
    }
  });

  const handleLinkPress = useCallback(() => {
    Linking.openURL(homepage);
  });

  useEffect(() => {
    loadURLPermission();
  }, []);

  return (
    <TouchableOpacity
      disabled={!canOpen}
      onPress={handleLinkPress}
    >
      <Typography
        fontWeight="bold"
        fontSize={25}
        style={styles.title}
      >
        {title}
      </Typography>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

Title.defaultProps = {
  homepage: '',
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  homepage: PropTypes.string,
};

export default Title;
