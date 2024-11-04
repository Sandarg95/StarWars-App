import React from "react";
import { View, Text, Button, StatusBar } from "react-native";
import styles from "../styles";


export default function Space({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>Welcome to the Space Page</Text>
      <View style={styles.box}>
        <Text style={styles.boxText}>Discover the Star Wars Space here!</Text>
      </View>
    </View>
  );
}
