import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Cards = ({ title, balance, profit, currency, profitChange }) => {
    return (
        <LinearGradient
            colors={['#fbc2eb', '#a6c1ee']} // You can customize these gradient colors
            style={styles.card}
        >
            <View style={styles.cardContent}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.balance}>{currency} {balance}</Text>
                <Text style={styles.subTitle}>Weekly Profit</Text>
                <Text style={styles.profit}>{currency} {profit}</Text>
                <View style={styles.profitChange}>
                    <Text style={styles.profitChangeText}>+{profitChange}%</Text>
                </View>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    card: {
        width: windowWidth * 0.8,
        height: windowHeight * 0.3,
        borderRadius: 15,
        padding: 20,
        marginRight: 15,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    cardContent: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        color: '#fff',
        marginBottom: 10,
    },
    balance: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
    },
    subTitle: {
        fontSize: 16,
        color: '#fff',
        marginTop: 15,
    },
    profit: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    profitChange: {
        position: 'absolute',
        right: 10,
        bottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    profitChangeText: {
        fontSize: 16,
        color: '#fff',
    },
});

export default Cards;
