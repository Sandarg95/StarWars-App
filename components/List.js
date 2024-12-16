import React, { useState } from "react";
import { FlatList, View, Text } from "react-native";
import PropTypes from "prop-types";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import Notification from "../notifications/Notification.ios";
import Swipeable from "../Swipeable";
import ListControls from "./ListControls"; 
import DetailPage from "../screen/DetailPage";

export default function List({ data, Controls, onFilter, onSort, asc }) {
  const navigation = useNavigation();
  const [notificationMessage, setNotificationMessage] = useState(null);

  const handleSwipe = (item) => {
    navigation.navigate("DetailPage", { item }); 
  };

  const renderItem = ({ item }) => (
    <Swipeable
      name={item.name}
      onSwipe={() => handleSwipe(item)} 
    >
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
    </Swipeable>
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
      {notificationMessage && <Notification message={notificationMessage} />}
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
