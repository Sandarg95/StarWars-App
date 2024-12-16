import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function DetailPage({ route }) {
  const { item } = route.params; 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Page</Text>
      <Text style={styles.text}>Name: {item.name}</Text>
      <Text style={styles.text}>ID: {item.id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 8,
  },
});
