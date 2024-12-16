import React, { useState } from 'react';
import { View, Text, StatusBar, SafeAreaView } from "react-native";
import styles from "../components/styles";
import ListContainer from "../components/ListContainer";
import { fetchItemsSpace } from "../api"; 
import LazyImage from "../LazyImage";

function ListContainerSpace() {
  return <ListContainer fetchFunction={fetchItemsSpace} />;
}

const remote = "https://lumiere-a.akamaihd.net/v1/images/vaders-tie-fighter_8bcb92e1.jpeg";

export default function Films({ navigation }) {
  const [source, setSource] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={false} barStyle="dark-content" />
      <Text style={styles.title}>Welcome to the Space Page</Text>
      <LazyImage
        style={styles.images}
        resizeMode="contain"
        source={{ uri: remote }}  
      />
      <View style={styles.box}>
        <Text style={styles.boxText}>DISCOVER THE STARWARS SPACESHIP HERE!</Text>
      </View>
      <View style={styles.container}>
        <ListContainerSpace />
      </View>
    </SafeAreaView>
  );
}
