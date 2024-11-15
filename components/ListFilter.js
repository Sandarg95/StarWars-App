import React, { useState } from "react"; // Added `useState` import
import PropTypes from "prop-types";
import { View, TextInput } from "react-native";
import styles from "./styles";
import PassiveNotifications from "../notifications/PassiveNotifications";
import Notification from "../notifications/Notification.ios";

export default function ListFilter({ onFilter }) {
  const [changedText, setChangedText] = useState("");

  return (
    <View>
      <TextInput
        autoFocus
        placeholder="Search"
        style={styles.filter}
        
        onChangeText={(e) => {
          onFilter(e); // Added this line to make the filter work in real time
        }}
        
        onSubmitEditing={(e) => {
          setChangedText(e.nativeEvent.text);
        }}
        onFocus={() => {
          setChangedText("");
          
        }}
      />
      {/* Trigger the Notification component with the current text */}
      {changedText && <Notification message={changedText} />}
    </View>
  );
}

ListFilter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};
