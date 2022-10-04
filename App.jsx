import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainNavigation from './src/navigation/MainNavigation';

export default function App() {
  return (
   <SafeAreaView style={{flex: 1}}>
<StatusBar
   style='inverted'
   hidden={false}
   translucent={false}
/>
      <MainNavigation />
   </SafeAreaView>
  );
}

