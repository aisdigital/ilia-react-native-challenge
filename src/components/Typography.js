import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import PropTypes from 'prop-types';

const Typography = ({
  children, fontWeight, style, fontSize, ...rest
}) => {
  const theme = useTheme();

  return (
    <Text
      {...rest}
      style={[
        { color: theme.colors.text },
        styles.text,
        fontWeight && { fontWeight },
        fontSize && { fontSize },
        style,
      ]}
    >
      {children.toString()}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

Typography.defaultProps = {
  fontSize: 16,
  fontWeight: 'normal',
  style: {},
};

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default Typography;
