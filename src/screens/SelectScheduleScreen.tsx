import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Atoms, Moleculs } from '../components';
import { RootStackParamList } from '../routes/types';
import theme from '../utils/theme';
import useBookStore from '../store/bookStore';

type Props = NativeStackScreenProps<RootStackParamList, 'SelectScheduleScreen'>;
const data = Array.from({ length: 7 }, (value, index) => index).map(item => {
  const date = new Date();
  date.setDate(date.getDate() + item);
  return {
    id: date,
    label: date,
  };
});

const jam = Array.from({ length: 8 }, (value, index) => index).map(
  (item, index) => 10 + index * 2,
);

const listCinema = [
  {
    title: 'Paris Van Java',
    data: jam,
  },
  {
    title: 'Cihampelas Walk',
    data: jam,
  },
  {
    title: 'Bandung Electronic Center',
    data: jam,
  },
];
export default function SelectScheduleScreen({ navigation }: Props) {
  const { schedule, updateSchedule } = useBookStore(state => state);
  return (
    <Moleculs.ContainerScreen
      bgStatusBar={theme.whiteColor}
      barStyle="dark-content"
      titleHeadePage=""
      goBack={() => navigation.goBack()}>
      <View style={styles.containerCard}>
        <Atoms.Typhograpy.TitleCard title="Choose Date" />
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={data}
          renderItem={({ item, index }) => {
            return (
              <Atoms.Card.CardDate
                onPress={() =>
                  updateSchedule({
                    ...schedule,
                    date: item.id.getDate().toString(),
                  })
                }
                date={item.label}
                status={
                  item.id.getDate().toString() === schedule.date
                    ? 'selected'
                    : 'enabled'
                }
                isLast={index === data.length - 1}
                isFirst={index === 0}
              />
            );
          }}
        />
      </View>
      <Atoms.Gap height={24} />
      <View style={styles.containerCinema}>
        {listCinema.map(cinema => {
          return (
            <View style={styles.containerCard} key={cinema.title}>
              <Atoms.Typhograpy.TitleCard title="Paris Van Java" />
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={cinema.data}
                renderItem={({ index, item }) => {
                  const date = new Date();
                  return (
                    <View
                      style={{
                        marginLeft: index === 0 ? theme.defaultMargin : 16,
                        marginRight:
                          index === data.length - 1 ? theme.defaultMargin : 0,
                      }}>
                      <Atoms.Card.SelecttableCard
                        onPress={() =>
                          updateSchedule({
                            ...schedule,
                            jam: item.toString(),
                            cinema: cinema.title,
                          })
                        }
                        label={`${item < 10 ? `0${item}` : item}:00`}
                        status={
                          item === parseInt(schedule.jam) &&
                          cinema.title === schedule.cinema
                            ? 'selected'
                            : item > date.getHours()
                            ? 'enabled'
                            : 'disabled'
                        }
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
          disabled={schedule.cinema === '' || schedule.date === ''}
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
