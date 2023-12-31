import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  WalletScreen: undefined;
  AccountConfirmationScreen: undefined;
  CheckoutScreen: undefined;
  EditProfileScreen: undefined;
  MainScreen: NavigatorScreenParams<HomeTabParamList>;
  MovieDetailScreen: {
    movieId: string;
  };
  PreferenceScreen: undefined;
  ProfileScreen: undefined;
  SelectScheduleScreen: undefined;
  SelectSeatScreen: undefined;
  SignInScreen: undefined;
  SignUpScreen: undefined;
  SplashScreen: undefined;
  SuccessScreen: undefined;
  TicketDetailScreen: undefined;
  TopUpScreen: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type HomeTabParamList = {
  MovieScreen: undefined;
  TicketScreen: undefined;
  Empty: undefined;
};

export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
