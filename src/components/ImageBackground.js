import React, { useState, useCallback } from 'react';
import { ImageBackground as RNImageBackground, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Loading from './Loading';

const ImageBackground = ({ children, ...rest }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadStart = useCallback(() => {
    setIsLoading(true);
  });

  const handleLoadEnd = useCallback(() => {
    setIsLoading(false);
  });

  return (
    <RNImageBackground
      onLoadStart={handleLoadStart}
      onLoadEnd={handleLoadEnd}
      resizeMode="cover"
      {...rest}
    >
      {
        isLoading
          ? (
            <View style={styles.container}>
              <Loading />
            </View>
          )
          : children
      }
    </RNImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

ImageBackground.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ImageBackground;
