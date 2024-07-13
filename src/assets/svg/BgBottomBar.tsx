import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const { width } = Dimensions.get('window');

const BottomNavigationBar = () => {
  return (
    <View style={styles.container}>
      <Svg
        width={width}
        height={99}
        viewBox="0 0 360 99"
        preserveAspectRatio="none"
        fill="none"
        style={styles.svg}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M180 30c16.569 0 30-13.431 30-30h130c11.046 0 20 8.954 20 20v45H0V20C0 8.954 8.954 0 20 0h130c0 16.569 13.431 30 30 30z"
          fill="#fff"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  svg: {
    width: '100%',
    height: 99,
  },
});

export default BottomNavigationBar;
