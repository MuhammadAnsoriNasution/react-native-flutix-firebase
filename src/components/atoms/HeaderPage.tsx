import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import theme from '../../utils/theme';
interface Props {
  title?: string;
  onPress: () => void;
  isLight?: boolean;
  posterPath?: string;
}
const width = Dimensions.get('screen').width;
export default function HeaderPage({
  title,
  onPress,
  isLight,
  posterPath,
}: Props) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} style={styles.goBack}>
        <IconAntDesign
          name="arrowleft"
          size={24}
          color={isLight ? theme.whiteColor : theme.blackColor}
        />
      </Pressable>
      <View
        style={[
          styles.wrapperTitle,
          { justifyContent: posterPath === undefined ? 'center' : 'flex-end' },
        ]}>
        <Text
          numberOfLines={2}
          style={[
            styles.title,
            isLight ? styles.textLight : styles.textDark,
            {
              textAlign: posterPath === undefined ? 'center' : 'right',
              maxWidth: width - theme.defaultMargin - 200,
            },
          ]}>
          {title}
        </Text>
        {posterPath !== undefined && (
          <Image source={{ uri: posterPath }} style={styles.poster} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: theme.defaultMargin,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  goBack: {
    position: 'absolute',
    left: 0,
    zIndex: 1,
  },
  wrapperTitle: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 16,
  },
  title: {
    ...theme.styles.blackTextFont,
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 28,
  },
  textLight: {
    color: theme.whiteColor,
  },
  textDark: {
    color: theme.blackColor,
  },
  poster: { width: 60, height: 60, borderRadius: 8 },
});
