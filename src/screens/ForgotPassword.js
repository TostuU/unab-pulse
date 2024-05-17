import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { ForgotBackground } from '../components/common/Backgrounds';
import { LoginBackground } from '../components/common/Backgrounds';
const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    console.log('Enviar enlace de restablecimiento a:', email);
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <LoginBackground />
      <View style={styles.content}>
        <Text style={styles.title}>Olvidé mi contraseña</Text>
        <Text style={styles.label}>Email de recuperación</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="" 
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'center',
    paddingTop: 60, 
  },
  content: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#772A91',
    fontWeight: 'bold',
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: '10%',
    color: 'black',
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    color: 'white',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#772A91',
    borderRadius: 5,
    padding: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default ForgotPassword;
