import { StyleSheet } from 'react-native';
import fontFamily from '../assets/fonts';

const defaultMargin = 24;

const mainColor = '#503E9D';
const mainColor2 = '#5F558B';
const mainColor3 = '#A99BE3';
const mainColor4 = '#6F678E';
const mainColor5 = '#382A74';
const accentColor1 = '#2C1F63';
const accentColor2 = '#FBD460';
const yellow2 = '#FFF2CB';
const greenColor = '#3E9D9D';
const redColor = '#FF5C83';
const blackColor = '#000000';
const greyColor = '#E4E4E4';
const greyColor2 = '#BEBEBE';
const greyColor3 = '#ADADAD';
const greyColor4 = '#C4C4C4';
const secondary = '#F6F6F6';
const secondary2 = '#DDDCDC';
const secondary3 = '#E0E0E0';
const secondary4 = '#F6F7F9';
const secondary5 = '#EBEFF6';
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
  mainColor2,
  secondary4,
  secondary5,
  mainColor3,
  mainColor4,
  mainColor5,
  greyColor4,
  yellow2,
  styles,
};
