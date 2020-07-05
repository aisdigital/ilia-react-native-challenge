import React from 'react';
import { StyleSheet } from 'react-native';
import ModalSelector from 'react-native-modal-selector';
import { useTheme } from '@react-navigation/native';
import PropTypes from 'prop-types';

import { useLanguageController } from '../hooks';

const Picker = ({ data, initValue, onChange }) => {
  const theme = useTheme();
  const { labels } = useLanguageController();

  return (
    <ModalSelector
      data={data}
      initValue={initValue}
      onChange={onChange}
      initValueTextStyle={[
        styles.initValueTextStyle,
        { color: theme.colors.text },
      ]}
      optionTextStyle={[
        styles.optionTextStyle,
        { color: theme.colors.text },
      ]}
      selectTextStyle={[
        styles.selectTextStyle,
        { color: theme.colors.text },
      ]}
      selectStyle={{
        borderColor: theme.colors.text,
      }}
      cancelText={labels.cancel}
      cancelTextStyle={[
        styles.cancelTextStyle,
        { color: theme.colors.text },
      ]}
    />
  );
};

Picker.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  initValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  initValueTextStyle: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
  optionTextStyle: {
    fontWeight: 'bold',
  },
  selectTextStyle: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  cancelTextStyle: {
    fontWeight: 'bold',
  },
});

export default Picker;
