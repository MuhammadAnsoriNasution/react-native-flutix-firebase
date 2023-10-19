import { StyleSheet } from 'react-native';
import fontFamily from '../assets/fonts';

const defaultMargin = 24;

const mainColor = '#503E9D';
const accentColor1 = '#2C1F63';
const accentColor2 = '#FBD460';
const greenColor = '#3E9D9D';
const redColor = '#FF5C83';
const blackColor = '#000';
const greyColor = '#E4E4E4';
const greyColor2 = '#BEBEBE';
const greyColor3 = '#ADADAD';
const secondary = '#F6F6F6';
const secondary2 = '#DDDCDC';
const secondary3 = '#E0E0E0';
const whiteColor = '#ffffff';

const styles = StyleSheet.create({
  blackTextFont: {
    fontFamily: fontFamily.raleWay[500],
    color: blackColor,
  },
  whiteTextFont: {
    color: 'white',
    fontFamily: fontFamily.raleWay[500],
  },
  purpleTextFont: {
    fontFamily: fontFamily.raleWay[500],
    color: mainColor,
  },
  greyTextFont: {
    fontFamily: fontFamily.raleWay[500],
    color: greyColor3,
  },
  whiteNumberFont: {
    fontFamily: fontFamily.openSans[400],
    color: 'white',
  },
  yellowNumberFont: {
    fontFamily: fontFamily.openSans[400],
    color: accentColor2,
  },
});

export default {
  mainColor,
  accentColor1,
  accentColor2,
  greyColor3,
  defaultMargin,
  greenColor,
  greyColor2,
  secondary,
  greyColor,
  redColor,
  secondary2,
  blackColor,
  whiteColor,
  secondary3,
  styles,
};
