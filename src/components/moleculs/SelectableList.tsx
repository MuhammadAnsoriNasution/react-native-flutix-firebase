import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from '../atoms';
import theme from '../../utils/theme';
interface Props {
  title: string;
  selectList: { label: string; isSelected: boolean }[];
  onSelect: (e: string) => void;
}
export default function SelectableList({ title, selectList, onSelect }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.wrapperlist}>
        {selectList.map(item => (
          <Card.SelecttableCard
            label={item.label}
            isSelected={item.isSelected}
            key={item.label}
            onPress={() => onSelect(item.label)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperlist: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.defaultMargin,
  },
  container: {
    marginBottom: theme.defaultMargin,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    paddingHorizontal: theme.defaultMargin,
  },
  title: {
    ...theme.styles.blackTextFont,
    fontSize: 20,
    lineHeight: 28,
  },
});
