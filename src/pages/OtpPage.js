import React, {useState} from 'react';
import { View, TouchableOpacity, Dimensions, Text, TextInput, Image, Button, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const OtpPage = ({ navigation, route}) => {
    const [otp, setotp] = useState()
    const { phoneNumber } = route.params;
  return (
    <View style={styles.container}>
      <Image source={require('../utils/otplogo.png')} style={styles.logo} />
      <Text style ={{color: 'gray', fontSize: 16, margin: 5}}> An authentication code has been sent to </Text>
      <Text style ={{color: 'gray', color:'#fff', fontSize: 16, marginBottom: 15}}> {phoneNumber} </Text>
      <View style={styles.input}>
        <TextInput 
          placeholder="8 " 
          style={{color: '#000'}}
          onChangeText={setotp}
        />
      </View>
      <Text style ={{color: 'gray', fontSize: 16, margin: 5}}> I didn`t received code. </Text>
      <TouchableOpacity><Text> Resend Code </Text></TouchableOpacity>
      <Text style ={{color: 'lightblue', fontSize: 16, marginBottom: 15,}}> Time Sec left </Text>
      <TouchableOpacity onPress={()=>navigation.navigate('CreatePassword')}>
        <View style={styles.btn}>
            <Text style = {{ color: '#fff', fontSize: windowHeight*0.04, fontWeight: 'bold'}}> Verify Now </Text>
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

export default OtpPage;