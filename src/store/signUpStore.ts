import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';

export type StateSignUpStore = {
  account: {
    id: string;
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
    avatarPath: string;
    balance: string;
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

const useSignUpStore = createWithEqualityFn<StateSignUpStore & Action>(
  set => ({
    account: {
      id: '',
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      avatarPath: '',
      balance: '500000',
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
  }),
  shallow,
);
export default useSignUpStore;
