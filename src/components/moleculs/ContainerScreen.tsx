import React, { ReactNode } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';
import theme from '../../utils/theme';
import HeaderPage from '../atoms/HeaderPage';
import { Atoms } from '..';

interface Props {
  children: ReactNode;
  titleHeadePage?: string;
  goBack?: () => void;
  bgStatusBar: string;
  barStyle: 'light-content' | 'dark-content';
  bgBody?: string;
  posterPath?: string;
  fab?: ReactNode;
}
export default function ContainerScreen({
  children,
  titleHeadePage,
  goBack,
  bgStatusBar = theme.accentColor1,
  barStyle = 'light-content',
  bgBody = theme.whiteColor,
  posterPath,
  fab,
}: Partial<Props>) {
  return (
    <>
      <SafeAreaView
        style={[styles.safeAreAstatusBar, { backgroundColor: bgStatusBar }]}
      />
      <SafeAreaView style={[styles.safeArea, { backgroundColor: bgBody }]}>
        <StatusBar backgroundColor={bgStatusBar} barStyle={barStyle} />
        {titleHeadePage !== undefined && (
          <>
            <HeaderPage
              title={titleHeadePage}
              posterPath={posterPath}
              onPress={() => {
                if (goBack !== undefined) {
                  goBack();
                }
              }}
            />
            <Atoms.Gap height={theme.defaultMargin} />
          </>
        )}
        <ScrollView
          style={[styles.container, { backgroundColor: bgBody }]}
          showsVerticalScrollIndicator={false}>
          {children}
        </ScrollView>
        {fab}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeAreAstatusBar: {
    flex: 0,
  },
  safeArea: {
    flex: 1,
    backgroundColor: theme.whiteColor,
    position: 'relative',
  },
  container: {
    flex: 1,
    position: 'relative',
  },
});
