import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function CompanyList() {
  const [listdata, setListdata] = useState([]);
  const url = "https://www.alphavantage.co/query?function=LISTING_STATUS&apikey=KVN88PS5KFRJ6EJL";

  useEffect(() => {
        const res= fetch(url)
        .then((response) => response.text())
        .then((data) => formatter(data));
  }, []);

  function formatter(data) {
    const lines = data.trim().split('\n');

    const result = lines.map(line => {
      const [ticker, name, exchange, type, date, nullField, status] = line.split(',');
  
      return {
        ticker: ticker.trim(),
        name: name.trim(),
        exchange: exchange.trim(),
        type: type.trim(),
        date: date.trim(),
        nullField: nullField === 'null' ? null : nullField,
        status: status.trim()
      };
    });

    setListdata(result);
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Company List</Text>
      <FlatList
        data={listdata}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Ticker: {item.ticker}</Text>
            <Text>Name: {item.name}</Text>
            <Text>Exchange: {item.exchange}</Text>
            <Text>Type: {item.type}</Text>
            <Text>Date: {item.date}</Text>
            <Text>Status: {item.status}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 5,
  },
});
