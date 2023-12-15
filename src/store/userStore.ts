import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';
export const initialProfile = {
  id: '',
  fullName: '',
  email: '',
  avatarPath: '',
  balance: '',
  favoriteGenre: [],
  language: '',
};
export type StateUserStore = {
  profile: {
    id: string;
    fullName: string;
    email: string;
    avatarPath: string;
    balance: string;
    favoriteGenre: string[];
    language: string;
  };
};

type Action = {
  updateProfile: (key: StateUserStore['profile']) => void;
};

const useUserStore = createWithEqualityFn<StateUserStore & Action>(
  set => ({
    profile: initialProfile,
    updateProfile: profile => {
      set(prev => ({ ...prev, profile }));
    },
  }),
  shallow,
);
export default useUserStore;
