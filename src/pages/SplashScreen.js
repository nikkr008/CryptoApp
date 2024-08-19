import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text, Dimensions } from 'react-native';
import * as Progress from 'react-native-progress';
import WelcomeScreen from './WelcomeScreen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('WelcomeScreen');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image 
        source={require('../utils/SplashScreenImg.png')}
        style={styles.logo}
      />
      <Progress.Bar indeterminate={true} style={styles.bar}/>
      <Text style={styles.txt}> Loading... </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '##181c24',
    height: windowHeight,
    width: windowWidth
  },
  logo: {
    margin: 1,
    padding: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    position: 'absolute'
  },
  bar:{
    width: 200,
    marginTop: 400,
    marginBottom: 20
  },
  txt:{
    fontSize: 24,
    fontWeight: '700',
    
  }
});

export default SplashScreen;
