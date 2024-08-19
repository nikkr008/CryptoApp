import React, {useState} from 'react';
import { View, TouchableOpacity, Dimensions, Text, TextInput, Image, Button, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CreatePassword = ({ navigation }) => {
    const [password, setpassword] = useState()
  return (
    <View style={styles.container}>
      <Image source={require('../utils/passwordlogo.png')} style={styles.logo} />
      <Text style ={{color: 'gray', fontSize: windowHeight*0.02, margin: 15}}> Choose a secure password that will be easy for you to remember. </Text>
      <View style={styles.input}>
        <TextInput 
          placeholder="Password" 
          style={{color: '#000'}}
          secureTextEntry={true}
          onChangeText={setpassword}
        />
      </View>
      <Text style ={{color: 'gray', fontSize: windowHeight*0.02, margin: 5}}> Has at least 8 characters </Text>
      <Text style ={{color: 'gray', fontSize: windowHeight*0.02, margin: 5}}> Has an uppercase letters or symbol </Text>
      <Text style ={{color: 'gray', fontSize: windowHeight*0.02, margin: 5}}> Has a number </Text>
      <TouchableOpacity onPress={()=>navigation.navigate('LocationPage')}>
        <View style={styles.btn}>
            <Text style = {{ color: '#fff', fontSize: windowHeight*0.03, fontWeight: 'bold'}}> Continue </Text>
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
    width: windowWidth*0.5,
    height: windowHeight*0.5,
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
    flexDirection: 'row'
  },
  btn:{
    height: windowHeight*0.06,
    width: windowWidth* 0.8,
    backgroundColor: '#20e3e3',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15
  }
});

export default CreatePassword;