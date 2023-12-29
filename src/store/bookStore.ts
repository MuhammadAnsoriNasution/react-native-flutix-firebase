import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';
import { MovieDetailType } from '../types/movie';

export type StateBookStore = {
  movie?: MovieDetailType;
  schedule: {
    date: string;
    jam: string;
    cinema: string;
    bookingCode: string;
  };
  seat: string[];
};

type Action = {
  updateMovie: (key: StateBookStore['movie']) => void;
  updateSchedule: (key: StateBookStore['schedule']) => void;
  updateSeat: (key: StateBookStore['seat']) => void;
};

const useBookStore = createWithEqualityFn<StateBookStore & Action>(
  set => ({
    seat: [],
    schedule: {
      date: '',
      jam: '',
      cinema: '',
      bookingCode: '',
    },
    updateMovie: movie => {
      set(prev => ({ ...prev, movie }));
    },
    updateSchedule: schedule => {
      set(prev => ({ ...prev, schedule }));
    },
    updateSeat: seat => {
      set(prev => ({ ...prev, seat }));
    },
  }),
  shallow,
);
export default useBookStore;
