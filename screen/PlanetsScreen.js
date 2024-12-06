import React, { useState } from 'react';
import { View, Text, StatusBar, SafeAreaView } from "react-native";
import styles from "../components/styles";
import ListContainer from "../components/ListContainer";
import { fetchItemsFilms } from "../api"; 
import LazyImage from "../LazyImage";

function ListContainerFilms() {
  return <ListContainer fetchFunction={fetchItemsFilms} />;
}

const remote = "https://lumiere-a.akamaihd.net/v1/images/aeos-prime-main_1af6e847.jpeg";

export default function Films({ navigation }) {
  const [source, setSource] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={false} barStyle="dark-content" />
      <Text style={styles.title}>Welcome to the Planets Page</Text>
      <LazyImage
        style={styles.images}
        resizeMode="contain"
        source={{ uri: remote }}  
      />
      <View style={styles.box}>
        <Text style={styles.boxText}>DISCOVER THE STARWARS PLANETS HERE!</Text>
      </View>
      <View style={styles.container}>
        <ListContainerFilms />
      </View>
    </SafeAreaView>
  );
}
