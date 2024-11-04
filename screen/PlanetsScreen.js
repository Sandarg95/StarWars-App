import React from "react";
import { View, Text, Button, StatusBar } from "react-native";
import styles from "../styles";


export default function Planets({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>Welcome to the Planets Page</Text>
      <View style={styles.box}>
        <Text style={styles.boxText}>Discover the Star Wars Planets here!</Text>
      </View>
    </View>
  );
}
