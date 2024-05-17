import React from 'react';
import Header from './Header';
import FormInputField from '../common/FormInputField';
import TextPressable from '../common/TextPressable';
import ButtonPressable from '../common/ButtonPressable';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const LoginForm = ({ email, setEmail, password, setPassword, onSubmitFunction, onForgotPassword, onRegister }) => {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.formContainer}>
        <Text style={styles.title}>Iniciar sesión</Text>


        <FormInputField
          label='Correo electrónico'
          placeholder='name@company.com'
          keyboardType='email-address'
          value={email}
          onChangeText={setEmail}
        />

        <FormInputField
          label='Contraseña'
          placeholder='•••••••••'
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <ButtonPressable
          onPress={onSubmitFunction}
          buttonText='Entrar'
        />

        <View style={styles.optionsContainer}>
          <TextPressable
            label='¿Olvidaste tu contraseña?'
            textStyle={styles.forgotPassword}
            onPress={onForgotPassword}
          />
          <TextPressable
            label='Regístrate'
            textStyle={styles.register}
            onPress={onRegister}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 20,
  },
  formContainer: {
    paddingHorizontal: 24,
    spaceBetween: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#424242',
    marginBottom: 24,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  forgotPassword: {
    color: '#6c757d',
    textDecorationLine: 'underline',
  },
  register: {
    color: '#007bff',
    textDecorationLine: 'underline',
  },
});

export default LoginForm;