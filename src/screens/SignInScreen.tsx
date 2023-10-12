/* eslint-disable react-native/no-inline-styles */
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../routes';
import theme from '../utils/theme';
import * as images from './../assets/images';
import TextInput from '../components/atoms/input/TextInput';
type Props = NativeStackScreenProps<RootStackParamList, 'SignInScreen'>;

export default function SignInScreen({}: Props) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image source={images.logo} style={styles.logo} />
        <Text style={styles.title}>{'Welcome Back,\nExplorer!'}</Text>
        <TextInput
          label="Email Address"
          style={{ marginBottom: 27 }}
          value={formData.email}
          onChangeText={e =>
            setFormData(p => ({ password: p.password, email: e }))
          }
        />
        <TextInput
          label="Password"
          style={{ marginBottom: 6 }}
          secureTextEntry={true}
          value={formData.password}
          onChangeText={e =>
            setFormData(p => ({ email: p.email, password: e }))
          }
        />
        <View style={styles.wrapperQuestion}>
          <Text style={styles.questionLabel}>Forgot Password? </Text>
          <TouchableOpacity>
            <Text style={styles.questionAction}>Get Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    paddingHorizontal: theme.defaultMargin,
    paddingTop: 30,
    flex: 1,
    backgroundColor: theme.whiteColor,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  logo: {
    height: 70,
    width: 67,
    marginBottom: 70,
  },
  title: {
    ...theme.styles.blackTextFont,
    fontSize: 20,
    marginBottom: 51,
  },
  wrapperQuestion: {
    display: 'flex',
    flexDirection: 'row',
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
