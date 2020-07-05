import React from 'react';
import Rating from 'react-native-star-rating';
import { useTheme } from '@react-navigation/native';
import PropTypes from 'prop-types';

const StarRating = ({ rating, containerStyle, starSize }) => {
  const theme = useTheme();

  return (
    <Rating
      containerStyle={containerStyle}
      halfStarColor={theme.colors.text}
      emptyStarColor={theme.colors.text}
      fullStarColor={theme.colors.text}
      maxStars={10}
      starSize={starSize}
      disabled
      rating={rating}
    />
  );
};

StarRating.defaultProps = {
  containerStyle: {},
  starSize: 16,
};

StarRating.propTypes = {
  starSize: PropTypes.number,
  rating: PropTypes.number.isRequired,
  containerStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default StarRating;
