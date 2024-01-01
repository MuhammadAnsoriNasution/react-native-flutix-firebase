import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import Toast from 'react-native-toast-message';
import { StateUserStore } from '../store/userStore';

export async function UploadFileService({
  profile,
}: {
  profile: StateUserStore['profile'];
}) {
  const reference = storage().ref(`/images/${profile.email}.png`);
  await reference.putFile(profile.avatarUpload);
  const urDownload = await storage()
    .ref(`/images/${profile.email}.png`)
    .getDownloadURL();
  profile.avatarPath = urDownload;
  return UpdateProfileService({ profile });
}

export async function UpdateProfileService({
  profile,
}: {
  profile: StateUserStore['profile'];
}) {
  firestore()
    .collection('users')
    .doc(profile.id)
    .set({
      email: profile.email,
      name: profile.fullName,
      balance: profile.balance,
      selectedGenres: profile.favoriteGenre.join(','),
      selectedLanguage: profile.language,
      profilePciture: profile.avatarPath,
    });
}

export const CreateAccountService = ({
  profile,
  cbSuccess,
}: {
  profile: StateUserStore['profile'];
  cbSuccess: () => void;
  cbError: () => void;
}) => {
  auth()
    .createUserWithEmailAndPassword(profile.email, profile.password)
    .then(async ress => {
      profile.id = ress.user.uid;
      cbSuccess();
      UpdateProfileService({
        profile,
      });
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        Toast.show({
          type: 'error',
          text1: 'That email address is already in use!',
        });
      } else if (error.code === 'auth/invalid-email') {
        Toast.show({
          type: 'error',
          text1: 'That email address is invalid!',
        });
      } else {
        console.log(error);
        Toast.show({
          type: 'error',
          text1: 'Failed to create user',
        });
      }
    });
};
