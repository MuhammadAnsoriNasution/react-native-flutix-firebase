import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

interface Props {
  style: StyleProp<ViewStyle>;
}
function Reflection2({ style }: Props) {
  return (
    <Svg width={148} height={80} viewBox="0 0 148 80" fill="none" style={style}>
      <Path d="M148 86.5L11-7.5H-6v94h154z" fill="url(#paint0_linear_34_80)" />
      <Defs>
        <LinearGradient
          id="paint0_linear_34_80"
          x1={58.5}
          y1={-16}
          x2={184.5}
          y2={100}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#503E9D" />
          <Stop offset={1} stopColor="#7463BF" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default Reflection2;
