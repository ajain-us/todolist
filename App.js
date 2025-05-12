import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import List from './List'

export default function App() {
  return (
    <View style={styles.container}>
      <List></List>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
