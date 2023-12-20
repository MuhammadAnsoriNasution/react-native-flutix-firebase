import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';
export const initialProfile: StateUserStore['profile'] = {
  id: '',
  fullName: '',
  email: '',
  avatarPath: '',
  balance: '500000',
  favoriteGenre: [],
  language: '',
  password: '',
  confirmPassword: '',
  avatarUpload: '',
  isAuth: false,
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
    password: string;
    confirmPassword: string;
    avatarUpload: string;
    isAuth: boolean;
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
