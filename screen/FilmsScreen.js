import React from 'react';
import { View, Text, StatusBar, SafeAreaView } from "react-native";
import styles from "../components/styles";
import ListContainer from "../components/ListContainer";
import { fetchItemsFilms } from "../api"; 

function ListContainerFilms() {
  return <ListContainer fetchFunction={fetchItemsFilms} />;
}

export default function Films({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={false} barStyle="dark-content" />
      <Text style={styles.title}>Welcome to the Films Page</Text>
      <View style={styles.box}>
        <Text style={styles.boxText}>DISCOVER THE STARWARS FILMS HERE!</Text>
      </View>
      <View style={styles.container}>
        <ListContainerFilms />
      </View>
    </SafeAreaView>
  );
}
