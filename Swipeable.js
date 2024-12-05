import React from "react";
import { View, ScrollView, Text, TouchableOpacity,Platform } from "react-native";
import styles from "./components/styles";
import { Animated } from 'react-native';
import { SlideInLeft, SlideOutRight } from 'react-native-reanimated';

export default function Swipeable({ onSwipe, name }) {

  function onScroll(e) {
    const offsetX = e.nativeEvent.contentOffset.x;
    const threshold = Platform.OS === "ios" ? 5 : 6; 
    if (offsetX >= threshold - 1 && offsetX <= threshold + 1) {
      onSwipe();
    }
  }


  const scrollProps = {
    horizontal: true,
    pagingEnabled: true,
    showsHorizontalScrollIndicator: false,
    scrollEventThrottle: 10,
    onScroll,
  };

  return (
    <Animated.View entering={SlideInLeft} exiting={SlideOutRight}>
      <View style={styles.swipeContainer}>
        <ScrollView {...scrollProps}>
          <TouchableOpacity>
            <View style={styles.swipeItem}>
              <Text style={styles.swipeItemText}>{name}</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.swipeBlank} />
        </ScrollView>
      </View>
    </Animated.View>
  );
}
