import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

type Login = {
  email: string;
  password: string;
};

type LoginProps = {
  onSubmit(props: Login): Promise<void>;
};

export function LoginComponent({ onSubmit }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    if (email && password) {
      onSubmit({ email, password });
    }
  }

  return (
    <View style={styles.container}>
      <View testID="email-input-container" style={styles.inputContainer}>
        <Text style={styles.label}>E-mail</Text>

        <TextInput
          testID="email-input"
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View style={styles.inputContainer} testID="password-input-container">
        <Text style={styles.label}>Password</Text>

        <TextInput
          testID="password-input"
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <TouchableOpacity
        testID="login-button"
        onPress={handleSubmit}
        style={styles.button}
      >
        <Text>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { display: 'flex', width: '100%', paddingHorizontal: 16 },
  inputContainer: { marginVertical: 4 },
  label: { marginBottom: 4 },
  input: { height: 50, borderWidth: 1, borderColor: 'grey', borderRadius: 4 },
  button: {
    backgroundColor: 'orange',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginTop: 16,
  },
});
