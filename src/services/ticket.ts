import firestore from '@react-native-firebase/firestore';

export async function SaveTicketService({
  ticket,
}: {
  ticket: {
    movieID: string;
    userId: string;
    theaterName: string;
    time: string;
    bookingCode: string;
    seats: string;
    name: string;
    totalPrice: string;
  };
  cbSuccess?: () => void;
  cbError?: () => void;
}) {
  return firestore().collection('tickets').add({
    movieID: ticket.movieID,
    userId: ticket.userId,
    theaterName: ticket.theaterName,
    time: ticket.time,
    bookingCode: ticket.bookingCode,
    seats: ticket.seats,
    name: ticket.name,
    totalPrice: ticket.totalPrice,
  });
}

export async function getTicketService({ userId }: { userId: string }) {
  const tickets = await firestore()
    .collection('tickets')
    .where('userId', '>=', userId)
    .get();
  return tickets;
}
