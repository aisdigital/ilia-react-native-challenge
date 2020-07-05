import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';

const HeaderBackIcon = () => {
  const theme = useTheme();
  return (
    <Feather
      name="chevron-left"
      size={30}
      color={theme.colors.primary}
    />
  );
};

export default HeaderBackIcon;
