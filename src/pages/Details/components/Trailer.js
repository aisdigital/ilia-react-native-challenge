import React, {
  useState, useCallback, useRef, useEffect,
} from 'react';
import {
  View, StyleSheet, Dimensions, Animated,
} from 'react-native';
import WebView from 'react-native-webview';
import { useTheme } from '@react-navigation/native';
import PropTypes from 'prop-types';

import { Loading } from '../../../components';

const { height } = Dimensions.get('window');

const Trailer = ({ trailer }) => {
  const theme = useTheme();
  const [isLoadingTrailer, setIsLoadingTrailer] = useState(true);

  const scale = useRef(new Animated.Value(0)).current;

  const handleTrailerLoadStart = useCallback(() => {
    setIsLoadingTrailer(true);
  });

  const handleTrailerLoadEnd = useCallback(() => {
    setIsLoadingTrailer(false);
  });

  useEffect(() => {
    Animated.spring(scale, {
      toValue: 1,
      damping: 10,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={[
      styles.container,
      { backgroundColor: theme.colors.background },
      {
        transform: [
          {
            scale,
          },
        ],
      },
      isLoadingTrailer && styles.videoContainerIsLoading,
    ]}
    >
      <WebView
        allowsFullscreenVideo
        onLoadStart={handleTrailerLoadStart}
        onLoadEnd={handleTrailerLoadEnd}
        javaScriptEnabled
        source={{
          uri: trailer,
        }}
      />
      {isLoadingTrailer
        && (
        <View style={styles.loadingContainer}>
          <Loading />
        </View>
        )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height / 4,
  },
  videoContainerIsLoading: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    position: 'absolute',
  },
});

Trailer.propTypes = {
  trailer: PropTypes.string.isRequired,
};

export default Trailer;
