import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/nightsky.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          styles={styles.logo}
          source={require("../assets/tmobile.jpeg")}
        />
        <Text style={styles.magenta}> The Uncarrier</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#000000",
  },
  logo: {
    resizeMode: "contain",
    width: 100,
    height: 100,
    position: "absolute",
    top: 70,
  },
  logoContainer: {
    position: "absolute",
    bottom: 150,
    alignItems: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#EA0A8E",
  },
  magenta: {
    color: "#EA0A8E",
  },
});
export default WelcomeScreen;
