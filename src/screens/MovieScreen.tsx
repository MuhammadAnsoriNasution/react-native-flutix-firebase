import React, { useEffect } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import * as images from '../assets/images';
import { Atoms, Moleculs, Organism } from '../components';
import { HomeTabScreenProps } from '../routes/types';
import { fUploadFile } from '../services/firebase';
import useUserStore from '../store/userStore';
import theme from '../utils/theme';
import { formatterCurrency } from '../utils/currency';

type Props = HomeTabScreenProps<'MovieScreen'>;

export default function MovieScreen({ navigation }: Props) {
  const { profile } = useUserStore(state => state);
  const genre = ['Horor', 'Music', 'Action', 'Drama', 'War', 'Crime'];

  useEffect(() => {
    if (profile.avatarUpload !== '') {
      fUploadFile({ profile, cbSuccess: () => {}, cbError: () => {} });
    }
  }, [profile.avatarUpload]);

  return (
    <>
      <Moleculs.ContainerScreen
        barStyle="light-content"
        bgBody={theme.secondary4}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.wrapperUserPic}
            onPress={() => navigation.navigate('ProfileScreen')}>
            <Image
              resizeMode="cover"
              source={
                profile.avatarPath === ''
                  ? images.user_pic
                  : { uri: profile.avatarPath }
              }
              style={styles.userPic}
            />
          </TouchableOpacity>
          <View style={styles.wrapperUserInfo}>
            <Text style={styles.name}>{profile.fullName}</Text>
            <Text style={styles.totalAmount}>
              {formatterCurrency({ nominal: parseFloat(profile.balance) })}
            </Text>
          </View>
        </View>
        {/* Now Playing */}
        <Organism.NowPlaying navigation={navigation} />

        {/* Genre */}
        <View style={styles.wrapperGenre}>
          {/* <Text style={styles.genreTitle}>Browse Movie</Text> */}
          <Atoms.Typhograpy.TitleCard title="Browse Movie" />
          <View style={styles.genreList}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={genre}
              renderItem={({ item, index }) => (
                <Atoms.Card.Genre genre={item} isFirst={index === 0} />
              )}
            />
          </View>
        </View>

        {/* Coming Soon */}
        <Organism.ComingSoon navigation={navigation} />

        {/* Coming Soon */}
        <View
          style={[styles.wrapperPlaying, { marginBottom: 100, marginTop: 0 }]}>
          <Atoms.Typhograpy.TitleCard title="Get Lucky Day" />
          <View style={{ marginHorizontal: theme.defaultMargin }}>
            <Atoms.Card.CardLucky
              title="Student Holiday"
              tnc="Maximal only for two people"
              discount="50%"
            />
          </View>
        </View>
      </Moleculs.ContainerScreen>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 24,
    paddingVertical: 30,
    backgroundColor: theme.accentColor1,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  wrapperUserPic: {
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: theme.mainColor2,
    borderRadius: 60,
    height: 60,
    width: 60,
    padding: 5,
  },
  userPic: {
    borderRadius: 100,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  wrapperUserInfo: {
    display: 'flex',
    gap: 4,
  },
  name: {
    ...theme.styles.whiteNumberFont,
    fontSize: 18,
  },
  totalAmount: {
    ...theme.styles.yellowNumberFont,
    fontSize: 14,
    fontWeight: '400',
  },
  wrapperPlaying: {
    marginTop: 30,
    display: 'flex',
    gap: 12,
    flexDirection: 'column',
  },
  playingLabel: {
    marginLeft: 24,
    ...theme.styles.blackTextFont,
    fontSize: 16,
  },
  wrapperGenre: {
    marginVertical: 30,
    display: 'flex',
    gap: 12,
    flexDirection: 'column',
  },
  genreTitle: {
    ...theme.styles.blackTextFont,
    fontSize: 16,
  },

  genreList: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: theme.defaultMargin,
  },
});
