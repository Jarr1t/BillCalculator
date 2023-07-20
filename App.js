import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Home from './components/Home';
import { appStyles } from './styles/styleSheets'


export default function App() {
  return (
    <View style={appStyles.container}>
      <StatusBar style="auto" />
      <Home />
    </View>
  );
}
