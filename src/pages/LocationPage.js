import React, {useState} from 'react';
import { View, TouchableOpacity, Dimensions, Text, TextInput, Image, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LocationPage = ({ navigation }) => {
    const [country, setCountry] = useState()
    const [city, setCity] = useState()

  return (
    <View style={styles.container}>
      <Image source={require('../utils/locationlogo.png')} style={styles.logo} />
      <View style={styles.input}>
        <TextInput 
          placeholder="Select your Country" 
          style={{color: '#000', margin: 1}}
          onChangeText={setCountry}
        />
        <Icon name="caret-down" size={25} color="#000" />
      </View>
      <View style={styles.input}>
        <TextInput 
          placeholder="Select your City" 
          style={{color: '#000', margin: 1}}
          onChangeText={setCountry}
        />
        <Icon name="caret-down" size={25} color="#000" />
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Main')}>
        <View style={styles.btn}>
            <Text style = {{ color: '#fff', fontSize: windowHeight*0.03, fontWeight: 'bold'}}> Verify Now </Text>
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
    justifyContent: 'space-around'
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

export default LocationPage;