import React from 'react';
import PropTypes from 'prop-types';

import Loading from './Loading';

const LoadingWrapper = ({ isLoading, children }) => (
  <>
    {
        isLoading
          ? <Loading />
          : children()
      }
  </>
);

LoadingWrapper.defaultProps = {
  isLoading: false,
};

LoadingWrapper.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.func.isRequired,
};

export default LoadingWrapper;
