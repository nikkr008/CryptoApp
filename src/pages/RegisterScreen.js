import React, { useState } from 'react';
import { View, TouchableOpacity, Dimensions, Text, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const RegisterScreen = ({ navigation }) => {
  const [gender, setGender] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    console.log('Register pressed');
    console.log({ name, gender, mobileNo, username, password });
  }

  function handleReset() {
    setGender('');
    setMobileNo('');
    setName('');
    setUsername('');
    setPassword('');
  }

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <Icon name="person" size={25} color="#4F8EF7" />
        <TextInput 
          placeholder="Name" 
          style={{color: '#000'}}
          onChangeText={setName}
          value={name}
        />
      </View>
      <View style={styles.input}>
        <Icon name="call" size={25} color="#4F8EF7" />
        <TextInput 
          placeholder="Mobile No." 
          style={{color: '#000'}}
          keyboardType="phone-pad"
          onChangeText={setMobileNo}
          value={mobileNo}
        />
      </View>
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
      <View style={styles.input}>
        <Icon name="male-female" size={25} color="#4F8EF7" />
        <TextInput 
          placeholder="Gender" 
          style={{color: '#000'}}
          onChangeText={setGender}
          value={gender}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={handleSubmit}>
          <View style={styles.btn}>
            <Text style={{fontSize: windowHeight * 0.03, color: '#fff', fontWeight: 'bold'}}> Register </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleReset}>
          <View style={[styles.btn, styles.resetBtn]}>
            <Text style={{fontSize: windowHeight * 0.03, color: '#fff', fontWeight: 'bold'}}> Reset </Text>
          </View>
        </TouchableOpacity>
      </View>
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
    width: windowWidth * 0.35,
    backgroundColor: '#20e3e3',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
  },
  resetBtn: {
    backgroundColor: '#e32020',
  },
});

export default RegisterScreen;
