import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import theme from '../../../utils/theme';
import Reflection2 from '../../../assets/svg/Reflection2';
import Reflection1 from '../../../assets/svg/Reflection1';
import Reflection3 from '../../../assets/svg/Reflection3';

interface Props {
  title: string;
  tnc: string;
  discount: string;
}
export default function CardLucky({ title, tnc, discount }: Props) {
  return (
    <View style={styles.container}>
      <Reflection2 style={{ position: 'absolute', width: '100%' }} />
      <Reflection1 style={{ position: 'absolute', right: 0, top: 0 }} />
      <Reflection3 style={{ position: 'absolute', right: 0, top: 0 }} />
      <View style={styles.wrapperTitle}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.tnc}>{tnc}</Text>
      </View>
      <View style={styles.wrapperDiscount}>
        <Text style={styles.off}>OFF</Text>
        <Text style={styles.discount}>{discount}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    height: 80,
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    backgroundColor: theme.mainColor,
    alignItems: 'center',
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  wrapperTitle: { display: 'flex', flexDirection: 'column', gap: 4 },
  title: {
    ...theme.styles.whiteTextFont,
    fontSize: 14,
    fontWeight: '400',
  },
  tnc: {
    ...theme.styles.whiteTextFont,
    color: theme.mainColor3,
    fontWeight: '300',
    fontSize: 11,
  },
  wrapperDiscount: {
    display: 'flex',
    gap: 8,
    flexDirection: 'row',
  },
  off: {
    ...theme.styles.yellowNumberFont,
    fontSize: 18,
    fontWeight: '300',
  },
  discount: {
    ...theme.styles.yellowNumberFont,
    fontSize: 18,
    fontWeight: '600',
  },
});
