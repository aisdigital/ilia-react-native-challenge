import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from '@react-navigation/native';

const Loading = () => {
  const theme = useTheme();

  return (
    <ActivityIndicator
      size="large"
      color={theme.colors.text}
    />
  );
};

export default Loading;
