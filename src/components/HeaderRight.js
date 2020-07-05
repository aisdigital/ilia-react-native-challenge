import React, { useState, useCallback } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';

import Settings from './Settings';

const HeaderRight = () => {
  const theme = useTheme();
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);

  const openSettingsPop = useCallback(() => {
    setIsSettingsVisible(true);
  });

  const closeSettingsPop = useCallback(() => {
    setIsSettingsVisible(false);
  });

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={openSettingsPop}
      >
        <Feather
          name="settings"
          size={30}
          color={theme.colors.primary}
        />
      </TouchableOpacity>
      <Settings
        isVisible={isSettingsVisible}
        onClose={closeSettingsPop}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});

export default HeaderRight;
