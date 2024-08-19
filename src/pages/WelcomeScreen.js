import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import LoginScreen from './LoginScreen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../utils/startlogo.png')}
        style={styles.logo}
      />
      <Text style={styles.txt}> Welcome to </Text>
      <Text style={styles.txt}> Cryptocurrency </Text>
      <Text style={styles.contentTxt}> Deliver your order around the world </Text>
      <Text style={styles.contentTxt}> without hesitation </Text>

      <TouchableOpacity onPress={()=>navigation.navigate('LoginScreen')}>
        <View style={styles.btn}>
            <Text style = {{fontSize: windowHeight*0.03, color: '#fff', fontWeight: 'bold'}}> Login </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={[styles.btn, {backgroundColor: '#20e3e3'}]}>
            <Text style = {{fontSize: windowHeight*0.03, color: '#fff', fontWeight: 'bold'}}> Register </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#181c24',
        height: windowHeight,
        width: windowWidth
      },
      logo: {
        margin: 1,
        padding: 1,
        width: windowWidth*0.8,
        height: windowHeight*0.4,
        borderRadius: 50
      },
      txt:{
        fontSize: windowHeight*0.04,
        fontWeight: '700',
        color: '#20e3e3',
      },
      contentTxt:{
        fontSize: windowHeight*0.02,
        fontWeight: '500',
        color: '#647575',
      },
      btn:{
        height: windowHeight*0.06,
        width: windowWidth* 0.8,
        backgroundColor: '#8c709c',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15
      }
})