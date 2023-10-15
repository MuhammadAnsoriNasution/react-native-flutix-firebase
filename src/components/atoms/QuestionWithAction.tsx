import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import theme from '../../utils/theme';

interface Props {
  question: string;
  actionLabel: string;
  onPress: () => void;
}
export default function QuestionWithAction({
  question,
  onPress,
  actionLabel,
}: Props) {
  return (
    <View style={styles.wrapperQuestion}>
      <Text style={styles.questionLabel}>{question}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.questionAction}>{actionLabel}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperQuestion: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  questionLabel: {
    ...theme.styles.greyTextFont,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 22,
  },
  questionAction: {
    ...theme.styles.purpleTextFont,
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 22,
  },
});
