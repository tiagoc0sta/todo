import { StatusBar } from 'react-native';
import Home from './src/screens/Home';
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

const [fontsLoaded] = useFonts({
  Inter_400Regular,
  Inter_700Bold,
});

export default function App() {
  return (
    <>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Home />
    </>
  );
}
