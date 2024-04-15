import { StyleSheet, View } from 'react-native';
import { LoginComponent } from './src/components/login.component';

export default function App() {
  return (
    <View style={styles.container}>
      <LoginComponent />
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
