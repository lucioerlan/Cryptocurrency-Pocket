import React from 'react'
import { Text, StyleSheet, View, Image, StatusBar } from 'react-native'

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <Image style={styles.image}
        source={require('../../assets/intro.png')} />
      <Text style={{
        color: 'rgba(255, 255, 255, 0.8)', textAlign: 'center', paddingHorizontal: 50,
        marginTop: 50, fontSize: 20
      }}> See the value of your favorite virtual currencies</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#313246"
  },
  image: {
    resizeMode: 'stretch'
  }
})
