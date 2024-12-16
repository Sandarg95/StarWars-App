import React, { useState, useEffect } from "react";
import { FlatList, View, Text } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import Notification from "../notifications/Notification";
import Swipeable from "../Swipeable";
import ListControls from "./ListControls"; // Assuming ListControls is in the same directory

export default function List({ data, Controls, onFilter, onSort, asc }) {
  const [notificationMessage, setNotificationMessage] = useState(null);

  const handleSwipe = (id) => {
    const item = data.find((item) => item.id === id);
    if (item) {
      setNotificationMessage(`You swiped: ${item.name}`);
    }
  };

  const renderItem = ({ item }) => (
    <Swipeable name={item.name} onSwipe={() => handleSwipe(item.id)} />
  );

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()} 
        ListHeaderComponent={
          <Controls onFilter={onFilter} onSort={onSort} asc={asc} />
        }
        renderItem={renderItem} 
      />
      {notificationMessage && (
        <Notification message={notificationMessage} /> 
      )}
    </View>
  );
}

List.propTypes = {
  Controls: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onFilter: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
  asc: PropTypes.bool.isRequired,
};

List.defaultProps = {
  Controls: ListControls,
};
