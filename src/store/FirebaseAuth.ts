import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';

export type StateFirebaseAuthStore = {
  isLogout: boolean;
};

type Action = {
  setLogout: (user: boolean) => void;
};

const useFirebaseAuthStore = createWithEqualityFn<
  StateFirebaseAuthStore & Action
>(
  set => ({
    isLogout: false,
    setLogout: isLogout => set(prev => ({ ...prev, isLogout })),
  }),
  shallow,
);
export default useFirebaseAuthStore;
