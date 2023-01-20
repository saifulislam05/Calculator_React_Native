import React from 'react'
import { View,StyleSheet,Image } from 'react-native'

import logo from '../assets/calculatorlogo.png'

const IntroScreen = () => {
  return (
      <View style={styles.container}>
          <View style={styles.inner}>
              <Image
                 source={logo} style={styles.logoImage} 
              />
          </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#FFBF00",
  },
  inner: {
    width: 100,
    height: 100,
  },
  logoImage: {
    width: "100%",
    height: "100%",
  },
});
    

export default IntroScreen