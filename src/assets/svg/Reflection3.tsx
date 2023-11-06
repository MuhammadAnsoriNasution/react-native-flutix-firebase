import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

interface Props {
  style?: StyleProp<ViewStyle>;
}

function Reflection3({ style }: Props) {
  return (
    <Svg width={98} height={27} viewBox="0 0 98 27" fill="none" style={style}>
      <Path
        d="M0-40h172v67H52.069a25 25 0 01-21.83-12.817L0-40z"
        fill="url(#paint0_linear_34_81)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_34_81"
          x1={23.2263}
          y1={-13.4528}
          x2={81.2745}
          y2={31.0378}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#7E6CC9" />
          <Stop offset={1} stopColor="#6252A9" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default Reflection3;
