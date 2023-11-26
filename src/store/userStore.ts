import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';
export const initialProfile = {
  id: '',
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
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
    password: string;
    confirmPassword: string;
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
