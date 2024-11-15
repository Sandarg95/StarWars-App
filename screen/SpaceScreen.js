import React from 'react';
import { View, Text, StatusBar, SafeAreaView } from "react-native";
import styles from "../components/styles";
import ListContainer from "../components/ListContainer";
import { fetchItemsSpace } from "../api"; // Import the fetch function

function ListContainerSpace() {
  return <ListContainer fetchFunction={fetchItemsSpace} />;
}

export default function Space({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={false} barStyle="dark-content" />
      <Text style={styles.title}>Welcome to the Space Page</Text>
      <View style={styles.box}>
        <Text style={styles.boxText}>DISCOVER THE STARWARS SPACESHIP HERE!</Text>
      </View>
      <View style={styles.container}>
        <ListContainerSpace />
      </View>
    </SafeAreaView>
  );
}
