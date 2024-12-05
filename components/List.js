import React, { useState, useEffect } from "react";
import { FlatList, View } from "react-native";
import styles from "./styles";
import Notification from "../notifications/Notification";
import Swipeable from "../Swipeable";

export default function List({ data }) {
  const [datas, setData] = useState(data);
  const [notificationMessage, setNotificationMessage] = useState(null);

  useEffect(() => {
    setData(data); // Sync internal state when prop changes
  }, [data]);

  const handleSwipe = (id) => {
    const item = datas.find((item) => item.id === id);
    if (item) {
      setNotificationMessage(`You swiped: ${item.name}`);
    }
  };

  const renderItem = ({ item }) => (
    <Swipeable name={item.name} onSwipe={() => handleSwipe(item.id)} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={datas}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      {notificationMessage && (
        <Notification
          message={notificationMessage}
          duration={3000}
          onDismiss={() => setNotificationMessage(null)} 
        />
      )}
    </View>
  );
}
