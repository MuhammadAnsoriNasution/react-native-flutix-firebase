import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

type Props = SvgProps & {
  color?: string;
};

export default function TabClipBg({ color = '#FFFFFF', ...props }: Props) {
  return (
    <Svg width={75} height={97} viewBox="0 0 75 97" {...props}>
      <Path
        d="M 75.2 0 v 97 H 0 V 0 c 4.1 0 7.4 3.1 7.9 7.1 C 10 21.7 22.5 33 37.7 33 c 15.2 0 27.7 -11.3 29.7 -25.9 c 0.5 -4 3.9 -7.1 7.9 -7.1 h -0.1 z"
        fill={color}
      />
    </Svg>
  );
}
