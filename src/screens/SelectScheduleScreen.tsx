import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Atoms, Moleculs } from '../components';
import { RootStackParamList } from '../routes/types';
import theme from '../utils/theme';

type Props = NativeStackScreenProps<RootStackParamList, 'SelectScheduleScreen'>;
const data = [
  { id: 1, value: 22 },
  { id: 2, value: 22 },
  { id: 3, value: 22 },
  { id: 4, value: 22 },
  { id: 5, value: 22 },
  { id: 6, value: 22 },
  { id: 7, value: 22 },
  { id: 8, value: 22 },
  { id: 9, value: 22 },
  { id: 10, value: 22 },
];
const listCinema = [
  {
    title: 'Paris Van Java',
    data: data,
  },
  {
    title: 'Cihampelas Walk',
    data: data,
  },
  {
    title: 'Bandung Electronic Center',
    data: data,
  },
];
export default function SelectScheduleScreen({ navigation }: Props) {
  return (
    <Moleculs.ContainerScreen
      bgStatusBar={theme.whiteColor}
      titleHeadePage=""
      goBack={() => navigation.goBack()}>
      <View style={styles.containerCard}>
        <Atoms.Typhograpy.TitleCard title="Choose Date" />
        <FlatList
          horizontal
          data={data}
          renderItem={({ index }) => {
            return (
              <Atoms.Card.CardDate
                status="disabled"
                isLast={index === data.length - 1}
                isFirst={index === 0}
              />
            );
          }}
        />
      </View>
      <Atoms.Gap height={24} />
      <View style={styles.containerCinema}>
        {listCinema.map(item => {
          return (
            <View style={styles.containerCard} key={item.title}>
              <Atoms.Typhograpy.TitleCard title="Paris Van Java" />
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={data}
                renderItem={({ index }) => {
                  return (
                    <View
                      style={{
                        marginLeft: index === 0 ? theme.defaultMargin : 16,
                        marginRight:
                          index === data.length - 1 ? theme.defaultMargin : 0,
                      }}>
                      <Atoms.Card.SelecttableCard
                        label="12 : 20"
                        status="disabled"
                        height={50}
                        width={90}
                      />
                    </View>
                  );
                }}
              />
            </View>
          );
        })}
      </View>
      <View style={styles.wrapperBtnNext}>
        <Atoms.Button.ButtonRoundedIcon
          onPress={() => navigation.navigate('SelectSeatScreen')}
          name="arrowright"
        />
      </View>
    </Moleculs.ContainerScreen>
  );
}

const styles = StyleSheet.create({
  containerCard: {
    display: 'flex',
    gap: 16,
    flexDirection: 'column',
  },
  containerCinema: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  wrapperBtnNext: {
    marginTop: 30,
    display: 'flex',
    alignItems: 'center',
  },
});
