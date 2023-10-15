/* eslint-disable react-native/no-inline-styles */
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../routes';
import theme from '../utils/theme';
import * as images from './../assets/images';
import TextInput from '../components/atoms/input/TextInput';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import QuestionWithAction from '../components/atoms/QuestionWithAction';
type Props = NativeStackScreenProps<RootStackParamList, 'SignInScreen'>;

export default function SignInScreen({ navigation }: Props) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
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
          <QuestionWithAction
            question="Forgot Password? "
            onPress={() => console.log('')}
            actionLabel="Get Now"
          />
          <View style={styles.columnCenter}>
            <Pressable style={styles.btnSubmit} disabled>
              <IconAntDesign
                name="arrowright"
                size={24}
                color={theme.greyColor2}
              />
            </Pressable>
            <QuestionWithAction
              actionLabel="Sign Up"
              question="Start fresh now? "
              onPress={() => navigation.navigate('SignUpScreen')}
            />
          </View>
        </View>
      </ScrollView>
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
  columnCenter: {
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 52,
    marginTop: 40,
    paddingBottom: 40,
  },
  btnSubmit: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: theme.greyColor,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelBtnSubmit: {},
});
