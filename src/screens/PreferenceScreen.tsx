import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Atoms, Moleculs } from '../components';
import { RootStackParamList } from '../routes/types';
import theme from '../utils/theme';
import useUserStore from '../store/userStore';

type Props = NativeStackScreenProps<RootStackParamList, 'PreferenceScreen'>;
export default function PreferenceScreen({ navigation }: Props) {
  const { profile, updateProfile } = useUserStore(state => state);

  const [listGenre, setListGenre] = useState([
    { label: 'Horor', isSelected: profile.favoriteGenre.includes('Horor') },
    { label: 'Music', isSelected: profile.favoriteGenre.includes('Music') },
    {
      label: 'Action',
      isSelected: profile.favoriteGenre.includes('Action'),
    },
    { label: 'Drama', isSelected: profile.favoriteGenre.includes('Drama') },
    { label: 'War', isSelected: profile.favoriteGenre.includes('War') },
    {
      label: 'Chrime',
      isSelected: profile.favoriteGenre.includes('Chrime'),
    },
  ]);

  const [listLanguage, setListLanguage] = useState([
    { label: 'Bahasa', isSelected: profile.language === 'Bahasa' },
    { label: 'English', isSelected: profile.language === 'English' },
    { label: 'Japanese', isSelected: profile.language === 'Japanese' },
    { label: 'Korean', isSelected: profile.language === 'Korean' },
  ]);

  const selectGenre = (genre: string) => {
    setListGenre(p =>
      p.map(item =>
        item.label === genre
          ? {
              ...item,
              isSelected:
                profile.favoriteGenre.length <= 3 ? !item.isSelected : false,
            }
          : item,
      ),
    );

    if (profile.favoriteGenre.includes(genre)) {
      updateProfile({
        ...profile,
        favoriteGenre: profile.favoriteGenre.filter(item => item !== genre),
      });
    } else if (profile.favoriteGenre.length <= 3) {
      updateProfile({
        ...profile,
        favoriteGenre: [...profile.favoriteGenre, genre],
      });
    }
  };

  const selectLang = (lang: string) => {
    updateProfile({ ...profile, language: lang });
    setListLanguage(p =>
      p.map(item =>
        item.label === lang
          ? { ...item, isSelected: !item.isSelected }
          : { ...item, isSelected: false },
      ),
    );
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <Atoms.HeaderPage title="" onPress={() => navigation.goBack()} />
        <Atoms.Gap height={20} />
        <Moleculs.SelectableList
          title={'Select Your\nFavorite Genre'}
          selectList={listGenre}
          onSelect={selectGenre}
        />
        <Moleculs.SelectableList
          title={'Movie Language\nYou Prefer?'}
          selectList={listLanguage}
          onSelect={selectLang}
        />
        <View style={styles.wrapperNext}>
          <Atoms.Button.ButtonRoundedIcon
            disabled={
              profile.favoriteGenre.length < 4 || profile.language === ''
            }
            name="arrowright"
            onPress={() => navigation.navigate('AccountConfirmationScreen')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.whiteColor,
  },
  wrapperNext: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
});
