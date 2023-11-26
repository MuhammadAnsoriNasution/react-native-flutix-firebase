import { createNavigationContainerRef } from '@react-navigation/native';
import { RootStackParamList } from './types';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

type NavigateType = typeof navigationRef.navigate;

export const navigate: NavigateType = (name, params?) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};
