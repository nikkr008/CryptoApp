import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SettingScreen() {
  return (
    <View style={styles.container}>
        <Text style={styles.heading}>Settings Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
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
})