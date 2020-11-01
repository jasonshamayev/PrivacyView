import React from "react";
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  Button,
  Alert,
  Platform,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  // console.log(useDimensions());
  const { landscape } = useDeviceOrientation();
  return <WelcomeScreen></WelcomeScreen>;
}
