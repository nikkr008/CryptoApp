import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CryptoCard = ({ name, price, symbol, percentageChange, icon }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Icon name={icon} size={30} color="#fff" />
        <Text style={styles.name}>{name}</Text>
        <View style={[styles.badge, percentageChange >= 0 ? styles.positive : styles.negative]}>
          <Text style={styles.badgeText}>{percentageChange >= 0 ? `+${percentageChange}%` : `${percentageChange}%`}</Text>
        </View>
      </View>
      <Text style={styles.price}>${price}</Text>
      <Text style={styles.symbol}>{symbol}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'gray',
    borderRadius: 10,
    padding: 15,
    margin: 10,
    width: 250,
    alignItems: 'center',
    height: 150
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  name: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
  badge: {
    borderRadius: 15,
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
  },
  positive: {
    backgroundColor: '#29A745',
  },
  negative: {
    backgroundColor: '#E53935',
  },
  price: {
    color: '#fff',
    fontSize: 24,
    marginTop: 10,
  },
  symbol: {
    color: '#ccc',
    fontSize: 14,
    marginTop: 5,
  },
});

export default CryptoCard;
