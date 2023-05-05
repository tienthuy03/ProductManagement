import { StyleSheet, Text, View, Image, TextInput, Pressable, ToastAndroid } from 'react-native'
import React, {useContext, useState} from 'react'
import color from '../../../../assets/colors/color'
import {UserContext} from '../../users/utilities/UserContext'

const Register = (props) => {
  const { navigation } = props;
  const {register} = useContext(UserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async() => {
    const res = await register(name,email, password);
    console.log("params register", res);
    if (res) {
      ToastAndroid.show('Register success', ToastAndroid.LONG);
      navigation.navigate('Login');
  } else {
      ToastAndroid.show('Register failed', ToastAndroid.LONG);
      setName('')
      setEmail('');
      setPassword('');
  }
  }
  return (
    <View style={styles.container}>
      <Image style={styles.imgBrRight}
        source={require('../../../../assets/images/broun.png')} />
      <Text style={styles.SignIn}>Sign-Up</Text>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input}
          placeholder="UserName" 
          value={name}
          onChangeText={setName}/>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}
          placeholder="Your Email" 
          value={email}
          onChangeText={setEmail}/>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}
          placeholder="Your Password" 
          value={password}
          onChangeText={setPassword}/>
      </View>
      <View style={styles.social}>
        <Pressable style={styles.login}
          onPress={() => navigation.goBack()}>
          <Text style={styles.textSocial}>Login</Text>
        </Pressable>
        <Pressable style={styles.signUp}
        onPress={handleRegister}>
          <Text style={styles.textSocial}>Sign-Up</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  textSocial: {
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 29.56,
    textAlign: 'center',
    color: color.while,
    fontFamily: 'kurale'
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
    marginTop: 250
  },
  input: {
    left: 16,
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 22.17,
    color: color.text,
    fontFamily: 'kurale'
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
    fontSize: 56,
    lineHeight: 94.59,
    color: color.while,
    left: 160,
    top: 150,
    fontFamily: 'kurale'
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