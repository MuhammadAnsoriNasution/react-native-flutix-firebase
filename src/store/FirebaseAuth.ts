import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';

export type StateSignUpStore = {
  user: FirebaseAuthTypes.User | null;
};

type Action = {
  updateUser: (user: StateSignUpStore['user']) => void;
};

const useSignUpStore = createWithEqualityFn<StateSignUpStore & Action>(
  set => ({
    user: null,
    updateUser: user => set(prev => ({ ...prev, user: user })),
  }),
  shallow,
);
export default useSignUpStore;
