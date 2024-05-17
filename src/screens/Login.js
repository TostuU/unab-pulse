import React, { useState } from 'react';
import LoginForm from '../components/login/LoginForm';

import { View } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { LoginBackground } from '../components/common/Backgrounds';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onHandleLogin = () => {
    if (email !== '' && password !== '') {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => console.log('Login success'))
        .catch((err) => console.log(err.message));
    }
  };

  const onForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <LoginBackground />
      <LoginForm
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        onSubmitFunction={onHandleLogin}
        onForgotPassword={onForgotPassword}
        onRegister={() => navigation.navigate('Signup')}
      />
    </View>
  );
};

export default Login;