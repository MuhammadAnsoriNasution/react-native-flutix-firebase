import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as images from '../assets/images';
import { Atoms } from '../components';
import { RootStackParamList } from '../routes/types';
import theme from '../utils/theme';
type Props = NativeStackScreenProps<RootStackParamList, 'MovieDetailScreen'>;

export default function MovieDetailScreen({ navigation }: Props) {
  const dataCrew = [
    {
      name: 'Robbie Maggot',
    },
    {
      name: 'Robert Downey Jr',
    },
    { name: 'Chris Hemsworth' },
    { name: 'Josh Thanos' },
    { name: 'TomHolland' },
  ];
  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: theme.accentColor1 }} />
      <SafeAreaView style={styles.safeArea}>
        <StatusBar backgroundColor={theme.accentColor1} />
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}>
          <ImageBackground source={images.poster} style={styles.image}>
            <LinearGradient
              style={styles.gradientImage}
              start={{ x: 0, y: 1 }}
              end={{ x: 0, y: 0.06 }}
              colors={['#FFFFFF', 'rgba(255,255,255,0)']}
            />
          </ImageBackground>

          <View style={styles.wrapperDetail}>
            <Text style={styles.title}>Avengers: Infinity Wars</Text>
            <Text style={styles.genre}>Action – English</Text>
            <Atoms.RatingStart
              voteAverage={8}
              starSize={0}
              color={theme.greyColor3}
            />
          </View>
          <View style={styles.wrapperCastAndCrew}>
            <Atoms.Typhograpy.TitleCard title="Cast & Crew" />
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={dataCrew}
              renderItem={({ item, index }) => {
                return (
                  <Atoms.Card.CardCrew
                    name={item.name}
                    isFirst={index === 0}
                    isLast={index + 1 === dataCrew.length}
                  />
                );
              }}
            />
          </View>
          <View style={styles.wrapperStoryLine}>
            <Atoms.Typhograpy.TitleCard title="Storyline" />
            <Text style={styles.storyLine}>
              The near future, a time when both hope and hard ships drive
              humanity to look to the stars and beyond while a mysterious. Nick
              Fury is compelled to launch the Avengers Initiative when Loki
              poses a threat to planet Earth. His squad of superheroes put their
              minds together to accomplish the task.
            </Text>
          </View>
          <View style={styles.wrapperContinue}>
            <Atoms.Button.RectButton
              label="Continue to Book"
              onPress={() => navigation.navigate('SelectScheduleScreen')}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.whiteColor,
  },
  container: {
    flex: 1,
    backgroundColor: theme.secondary4,
  },
  image: {
    width: '100%',
    height: 270,
    resizeMode: 'cover',
    position: 'relative',
    marginBottom: 16,
  },
  gradientImage: {
    height: 70,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  wrapperDetail: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 6,
  },
  title: {
    ...theme.styles.blackTextFont,
    fontSize: 24,
  },
  genre: {
    ...theme.styles.greyTextFont,
    fontSize: 12,
    fontWeight: '400',
  },
  wrapperCastAndCrew: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    marginBottom: theme.defaultMargin,
  },
  wrapperStoryLine: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    marginBottom: 30,
  },
  storyLine: {
    marginHorizontal: theme.defaultMargin,
    ...theme.styles.greyTextFont,
    fontSize: 14,
    fontWeight: '400',
  },
  wrapperContinue: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 50,
  },
});
