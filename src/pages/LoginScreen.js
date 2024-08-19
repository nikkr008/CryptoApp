import React, { useState } from 'react';
import { View, TouchableOpacity, Dimensions, Text, TextInput, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LoginScreen = ({ navigation }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    console.log('Login pressed');
    console.log('Username:', username);
    console.log('Password:', password);
    if(username === 'nik.kr008@gmail.com' && password === 'password'){
      navigation.navigate('PhonePage');
    }
  }

  return (
    <View style={styles.container}>
      <Image source={require('../utils/loginlogo.png')} style={styles.logo} />
      <View style={styles.input}>
        <Icon name="mail" size={25} color="#4F8EF7" />
        <TextInput 
          placeholder="Username" 
          style={{color: '#000'}}
          onChangeText={setUsername}
          value={username}
        />
      </View>
      <View style={styles.input}>
        <Icon name="lock-closed" size={25} color="#4F8EF7" />
        <TextInput
          placeholder="Password"
          style={{color: '#000'}}
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />
        <Text style={{color: '#fff', margin: 5, marginRight: 50}}>Remember me</Text>
        <Text style={{color: '#fff', margin: 5}}>Forget password ?</Text>
      </View>
      <TouchableOpacity onPress={handleLogin}>
        <View style={styles.btn}>
          <Text style={{fontSize: windowHeight * 0.03, color: '#fff', fontWeight: 'bold'}}> Sign in </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#181c24',
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 30,
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingLeft: 20,
    borderRadius: 25,
    marginBottom: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btn: {
    height: windowHeight * 0.06,
    width: windowWidth * 0.8,
    backgroundColor: '#20e3e3',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
  },
});

export default LoginScreen;
