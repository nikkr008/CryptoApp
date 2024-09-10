import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CandlestickChart } from 'react-native-wagmi-charts';
import { ChartData } from '../utils/Data';
import { formatStockData } from '../components/formatStockData';
import { useApiData } from '../components/GetApiData';
import * as Progress from 'react-native-progress';

const ChartsPage = ({ navigation }) => {

  const url = "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=IBM&apikey=KVN88PS5KFRJ6EJL";
  const { data, loading, error } = useApiData(url);

  const seriesData = formatStockData(data);
  // console.log(seriesData);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Progress.Bar indeterminate={true} style={styles.bar}/>
                <Text>Loading...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Error: {error}</Text>
            </View>
        );
    }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Candlestick Chart</Text>
      <CandlestickChart.Provider data={seriesData}>
        <CandlestickChart>
          <CandlestickChart.Candles />
        </CandlestickChart>
      </CandlestickChart.Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  bar:{
    width: 200,
    marginTop: 400,
    marginBottom: 20
  }
})

export default ChartsPage;