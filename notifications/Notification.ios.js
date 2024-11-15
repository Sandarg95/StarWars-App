import React, { useState, useEffect } from "react";
import { View, Modal, Text } from "react-native";
import styles from "../components/styles";

export default function Notification(props) {
  const [message, setMessage] = useState(props.message);

  useEffect(() => {
    setMessage(props.message);

    const timer = setTimeout(() => {
        setMessage(null);
      }, props.duration);
  
      return () => {
        clearTimeout(timer);
      };
    }, [props.message]);

  const modalProps = {
    animationType: "fade",
    transparent: true,
    visible: Boolean(message),
  };

  return (
    <Modal {...modalProps}>
      <View style={styles.notificationContainer}>
        <View style={styles.notificationInner}>
          <Text> You enter: {message}</Text>
        </View>
      </View>
    </Modal>
  );
}

Notification.defaultProps = {
  duration: 5000,
};