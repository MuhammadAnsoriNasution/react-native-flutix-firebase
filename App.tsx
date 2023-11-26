import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import * as React from 'react';
import Toast, {
  ErrorToast,
  InfoToast,
  SuccessToast,
} from 'react-native-toast-message';
import Routes from './src/routes/index';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './src/routes/RootNavigation';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer ref={navigationRef}>
          <Routes />
        </NavigationContainer>
      </QueryClientProvider>
      <Toast
        config={{
          success: props => (
            <SuccessToast
              {...props}
              text2NumberOfLines={4}
              text1NumberOfLines={1}
            />
          ),
          info: props => (
            <InfoToast
              {...props}
              text2NumberOfLines={4}
              text1NumberOfLines={1}
            />
          ),
          error: props => (
            <ErrorToast
              {...props}
              text2NumberOfLines={4}
              text1NumberOfLines={1}
            />
          ),
        }}
      />
    </>
  );
}
export default App;
