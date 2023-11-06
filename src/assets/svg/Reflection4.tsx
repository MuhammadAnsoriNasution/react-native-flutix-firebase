import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

interface Props {
  style?: StyleProp<ViewStyle>;
}
function Reflection4({ style }: Props) {
  return (
    <Svg
      width={312}
      height={176}
      viewBox="0 0 312 176"
      fill="none"
      style={style}>
      <Path
        d="M322.5 176L-6 1v-11.5h328.5V176z"
        fill="url(#paint0_linear_85_33)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_85_33"
          x1={8.5}
          y1={6.49999}
          x2={283.5}
          y2={141}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#382A74" />
          <Stop offset={1} stopColor="#493A88" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default Reflection4;
