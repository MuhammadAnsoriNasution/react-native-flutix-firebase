import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';
interface Props {
  style?: StyleProp<ViewStyle>;
}
function Reflection1({ style }: Props) {
  return (
    <Svg width={118} height={43} viewBox="0 0 118 43" fill="none" style={style}>
      <Path
        d="M0-24h172v67H52.069a25 25 0 01-21.83-12.817L0-24z"
        fill="url(#paint0_linear_34_77)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_34_77"
          x1={23.2263}
          y1={2.54717}
          x2={113.198}
          y2={42.5379}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#6252A9" />
          <Stop offset={1} stopColor="#6252A9" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default Reflection1;
