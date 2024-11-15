import React, { useState } from "react";
import { Text, View } from "react-native";

import Notification from "./Notification.ios";
import styles from "../components/styles";


export default function PassiveNotifications() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState(null);

  return (
    <View style={styles.notificationContainer}>
      <Notification message={message} />
      <Text
        onPress={() => {
          setCount(count + 1);
          setMessage(null);
        }}
      >
        Pressed {count}
      </Text>
      <Text
        onPress={() => {
          setMessage("Something happened!");
        }}
      >
        Show Notification
      </Text>
    </View>
  );
}