import React from 'react';
import { Button, Dimensions, View, FlatList, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Data, CryptoData } from '../utils/Data';
import Cards from './Cards';
import CryptoCard from './CryptoCard';
import Icon from 'react-native-vector-icons/Ionicons';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function HomeScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <Cards 
            title={item.title}
            balance={item.balance}
            profit={item.profit}
            currency={item.currency}
            profitChange={item.profitChange}
        />
  );

    return (
        <View style={styles.container}>
          <Text style={{fontSize: 16, color: '#39c3ed'}}> Hi Alex Smith </Text>
          <Text style={{fontSize: 20, color: '#fff'}}> Good Morning </Text>
          <FlatList
            data={Data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        />
        <View style ={{flexDirection: 'row', justifyContent: 'space-between', margin:10}}>
          <Text style={{fontSize: 20, color: '#fff'}}> Portfolio </Text>
          <Text style={{fontSize: 16, color: 'gray'}}> View All++ </Text>
        </View>
            <FlatList
            data={CryptoData}
            renderItem={({ item }) => <CryptoCard {...item} />}
            keyExtractor={(item) => item.id}
            horizontal={true}
          />
          <View style={styles.actionContainer}>
            <View style={styles.actionButton}>
              <View style={[styles.iconContainer, { backgroundColor: '#d48f5d' }]}>
                <Icon name="paper-plane" size={30} color="#fff" />
              </View>
              <Text style={styles.label}>Send</Text>
            </View>
            <View style={styles.actionButton}>
              <View style={[styles.iconContainer, { backgroundColor: '#25dbc9' }]}>
                <Icon name="arrow-down" size={30} color="#fff" />
              </View>
              <Text style={styles.label}>Receive</Text>
            </View>
            <View style={styles.actionButton}>
              <View style={[styles.iconContainer, { backgroundColor: '#db63cd' }]}>
                <Icon name="cash-outline" size={30} color="#fff" />
              </View>
              <Text style={styles.label}>Buy</Text>
            </View>
            <View style={styles.actionButton}>
              <View style={[styles.iconContainer, { backgroundColor: '#9254c4' }]}>
                <Icon name="swap-horizontal" size={30} color="#fff" />
              </View>
              <Text style={styles.label}>Swap</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity onPress={()=>{navigation.navigate('Charts')}}>
              <View style={{backgroundColor: 'red', height: 50, width: windowWidth, alignItems: 'center'}}>
                <Text >Charts</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181c24',
      },
      heading: {
        fontSize: 24,
        marginBottom: 20,
      },
      image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20,
      },
      card: {
        width: windowWidth * 0.7,
        marginRight: 15,
        borderRadius: 10,
        backgroundColor: '#fff',
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 5,
    },
    actionContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 20,
    },
    actionButton: {
      alignItems: 'center',
      marginHorizontal: 10,
    },
    iconContainer: {
      width: 60,
      height: 60,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
})