import { create } from 'zustand';

export type StateSignUpStore = {
  account: {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
    avatarPath: string;
  };
};

type Action = {
  updateAccount: (
    account: keyof StateSignUpStore['account'],
    value: string,
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
  updateAccount: (key, value) =>
    set(prev => ({ ...prev, account: { ...prev.account, [key]: value } })),
}));
export default useSignUpStore;
