import React from 'react';
import { View, Text, StatusBar, SafeAreaView } from "react-native";
import styles from "../components/styles";
import ListContainer from "../components/ListContainer";
import { fetchItemsPlanets } from "../api"; 

function ListContainerPlanets() {
  return <ListContainer fetchFunction={fetchItemsPlanets} />;
}

export default function Planets({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={false} barStyle="dark-content" />
      <Text style={styles.title}>Welcome to the Planets Page</Text>
      <View style={styles.box}>
        <Text style={styles.boxText}>DISCOVER THE STARWARS PLANETS HERE!</Text>
      </View>
      <View style={styles.container}>
        <ListContainerPlanets />
      </View>
    </SafeAreaView>
  );
}
