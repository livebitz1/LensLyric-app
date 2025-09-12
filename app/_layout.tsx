import { useColorScheme } from '@/hooks/useColorScheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, router } from 'expo-router';
import 'react-native-reanimated';
import Header from '../components/Header';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{
          headerShown: false,
          // header: ({ navigation }) => <Header title="Pixel Lyric" showBackButton={false} />,
        }} />
        <Stack.Screen name="categories" options={{
          headerShown: false,
          // header: ({ navigation }) => <Header title="Categories" />,
        }} />
        <Stack.Screen name="(tabs)/book" options={{
          headerShown: true,
          header: () => <Header title="Book a Photographer" onBackPress={() => router.replace('/')} />,
        }} />
        <Stack.Screen name="+not-found" options={{
          headerShown: true,
          header: ({ navigation }) => <Header title="Not Found" />,
        }} />
      </Stack>
    </ThemeProvider>
  );
}
