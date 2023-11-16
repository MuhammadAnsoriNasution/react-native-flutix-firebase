import { create } from 'zustand';

export type StateSignUpStore = {
  account: {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
    avatarPath: string;
  };
  preference: {
    favoriteGenre: string[];
    language: string;
  };
};

type Action = {
  updateAccount: (
    key: keyof StateSignUpStore['account'],
    value: string,
  ) => void;
  updatePreference: (
    key: keyof StateSignUpStore['preference'],
    value: string[] | string,
  ) => void;
};

const useSignUpStore = create<StateSignUpStore & Action>(set => ({
  account: {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    avatarPath: '',
  },
  preference: {
    favoriteGenre: [],
    language: '',
  },
  updateAccount: (key, value) =>
    set(prev => ({ ...prev, account: { ...prev.account, [key]: value } })),
  updatePreference: (key, value) =>
    set(prev => ({
      ...prev,
      preference: { ...prev.preference, [key]: value },
    })),
}));
export default useSignUpStore;
