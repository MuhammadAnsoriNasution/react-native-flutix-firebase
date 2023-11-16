import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Atoms, Moleculs } from '../components';
import { RootStackParamList } from '../routes/types';
import theme from '../utils/theme';
import useSignUpStore from '../store/signUpStore';

type Props = NativeStackScreenProps<RootStackParamList, 'PreferenceScreen'>;
export default function PreferenceScreen({ navigation }: Props) {
  const { preference, updatePreference } = useSignUpStore(state => state);

  const [listGenre, setListGenre] = useState([
    { label: 'Horor', isSelected: preference.favoriteGenre.includes('Horor') },
    { label: 'Music', isSelected: preference.favoriteGenre.includes('Music') },
    {
      label: 'Action',
      isSelected: preference.favoriteGenre.includes('Action'),
    },
    { label: 'Drama', isSelected: preference.favoriteGenre.includes('Drama') },
    { label: 'War', isSelected: preference.favoriteGenre.includes('War') },
    {
      label: 'Chrime',
      isSelected: preference.favoriteGenre.includes('Chrime'),
    },
  ]);

  const [listLanguage, setListLanguage] = useState([
    { label: 'Bahasa', isSelected: preference.language === 'Bahasa' },
    { label: 'English', isSelected: preference.language === 'English' },
    { label: 'Japanese', isSelected: preference.language === 'Japanese' },
    { label: 'Korean', isSelected: preference.language === 'Korean' },
  ]);

  const selectGenre = (genre: string) => {
    setListGenre(p =>
      p.map(item =>
        item.label === genre
          ? {
              ...item,
              isSelected:
                preference.favoriteGenre.length <= 3 ? !item.isSelected : false,
            }
          : item,
      ),
    );

    if (preference.favoriteGenre.includes(genre)) {
      updatePreference(
        'favoriteGenre',
        preference.favoriteGenre.filter(item => item !== genre),
      );
    } else if (preference.favoriteGenre.length <= 3) {
      updatePreference('favoriteGenre', [...preference.favoriteGenre, genre]);
    }
  };

  const selectLang = (lang: string) => {
    updatePreference('language', lang);
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
