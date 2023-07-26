import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import Home from './components/Home';
import ItemList from './components/ItemList';
import UserList from './components/UserList';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {/* <Home /> */}
      <ItemList />
      <UserList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    // flex: 1,
  },
});
