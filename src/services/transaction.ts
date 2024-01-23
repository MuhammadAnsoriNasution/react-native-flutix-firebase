import firestore from '@react-native-firebase/firestore';

export async function SaveTransactionService({
  booking,
}: {
  booking: {
    userID: string;
    title: string;
    subTitle: string;
    amount: string;
    time: string;
    picture: string;
  };
}) {
  return firestore().collection('transactions').add({
    userID: booking.userID,
    title: booking.title,
    subTitle: booking.subTitle,
    amount: booking.amount,
    time: booking.time,
    picture: booking.picture,
  });
}

export async function getTransactionService(userID: string) {
  return await firestore()
    .collection('transactions')
    .where('userID', '==', userID)
    .get();
}
