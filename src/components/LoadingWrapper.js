import React from 'react'
import PropTypes from 'prop-types'

import Loading from './Loading'

const LoadingWrapper = ({ isLoading, children }) => {
  return (
    <>
      {
        isLoading
          ? <Loading />
          : children
      }
    </>)
}

LoadingWrapper.defaultProps = {
  isLoading: false
}

LoadingWrapper.propTypes = {
  isLoading: PropTypes.bool
}

export default LoadingWrapper
