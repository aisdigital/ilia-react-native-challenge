import React, { useCallback, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import { Form } from '@unform/mobile';
import PropTypes from 'prop-types';

import { Input } from '../../../components';
import { useLanguageController } from '../../../hooks';

const SearchBar = ({ onSubmit }) => {
  const { labels } = useLanguageController();
  const formRef = useRef(null);

  const handleSubmit = useCallback(({ search }) => {
    onSubmit(search);
  });

  const handleDebounce = useCallback(() => {
    formRef.current.submitForm();
  });

  return (
    <View
      style={styles.container}
    >
      <Form
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <Input
          name="search"
          placeholder={labels.searchMoviesPlaceholder}
          onDebounce={handleDebounce}
        />
      </Form>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
