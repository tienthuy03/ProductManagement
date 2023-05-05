import { StyleSheet, Text, View, Image, TextInput, Pressable, ToastAndroid } from 'react-native'
import React, { useState, useContext } from 'react'
import color from '../../../../assets/colors/color'
import { UserContext } from '../utilities/UserContext'
import AxiosInstance from '../../../axiosClient/AxiosInstance'

const Login = (props) => {
  const { navigation } = props;
  const {login} = useContext(UserContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 
  const handleLogin = async () => {
    const res = await login(email, password);
    console.log("user login", res);
    if (res) {
      ToastAndroid.show('Login success', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Login failed', ToastAndroid.SHORT);
    }
  }
  return (
    <View style={styles.container}>
      <Image style={styles.imgBrRight}
        source={require('../../../../assets/images/red.png')} />
      <Text style={styles.SignIn}>Sign-In</Text>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input}
          placeholder="Your Email"
          value={email}
          onChangeText={setEmail} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}
          placeholder="Your Password"
          value={password}
          onChangeText={setPassword} />
      </View>
      <Text style={styles.textForget}>Forgot Password?</Text>
      <View style={styles.social}>
        <Pressable style={styles.login}
          onPress={handleLogin}>
          <Text style={styles.textSocial}>Login</Text>
        </Pressable>
        <Pressable style={styles.signUp}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.textSocial}>Sign-Up</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  textSocial: {
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 29.56,
    textAlign: 'center',
    color: color.while,
    fontFamily: 'kurale',
  },
  signUp: {
    width: 160,
    height: 56,
    borderRadius: 15,
    backgroundColor: color.primary,
    alignContent: 'center',
    justifyContent: 'center',
  },
  login: {
    width: 160,
    height: 56,
    borderRadius: 15,
    backgroundColor: color.seconds,
    alignContent: 'center',
    justifyContent: 'center',
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 180
  },
  textForget: {
    marginTop: 160,
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 22.17,
    color: color.black,
    fontFamily: 'kurale',
  },
  input: {
    left: 16,
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 22.17,
    color: color.text,
    fontFamily: 'kurale',
  },
  inputContainer: {
    width: 350,
    height: 58,
    borderRadius: 15,
    backgroundColor: color.while,
    elevation: 10,
    top: 180,
    justifyContent: 'center',
    marginBottom: 33
  },
  SignIn: {
    fontWeight: '400',
    fontSize: 48,
    lineHeight: 94.59,
    color: color.while,
    left: 160,
    top: 150,
    fontFamily: 'kurale',
  },
  imgBrRight: {
    bottom: 170,
    left: 40,
    position: 'absolute',
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: color.while
  }
})