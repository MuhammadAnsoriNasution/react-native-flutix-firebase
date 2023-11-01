import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Atoms, Moleculs } from '../components';
import { RootStackParamList } from '../routes/types';
import theme from '../utils/theme';

type Props = NativeStackScreenProps<RootStackParamList, 'PreferenceScreen'>;
export default function PreferenceScreen({ navigation }: Props) {
  const [listGenre, setListGenre] = useState([
    { label: 'Horor', isSelected: false },
    { label: 'Music', isSelected: false },
    { label: 'Action', isSelected: false },
    { label: 'Drama', isSelected: false },
    { label: 'War', isSelected: false },
    { label: 'Chrime', isSelected: false },
  ]);

  const [listLanguage, setListLanguage] = useState([
    { label: 'Bahasa', isSelected: false },
    { label: 'English', isSelected: false },
    { label: 'Japanese', isSelected: false },
    { label: 'Korean', isSelected: false },
  ]);

  const selectGenre = (genre: string) => {
    setListGenre(p =>
      p.map(item =>
        item.label === genre
          ? { ...item, isSelected: !item.isSelected }
          : { ...item, isSelected: false },
      ),
    );
  };

  const selectLang = (lang: string) => {
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
