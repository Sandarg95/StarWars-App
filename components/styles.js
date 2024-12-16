import { Platform, StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F8",
    padding: 16,
    ...Platform.select({
      ios: { paddingTop: 20 },
      android: { paddingTop: StatusBar.currentHeight },
    }),
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "blue",
    textAlign: "center",
    marginVertical: 20,
  },
  item: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "left",
    marginVertical: 20,
    marginLeft: 50,
    padding: 20,
  },
  box: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 10,
    marginVertical: 20,
    marginBottom:0,
    alignItems: "center",
  },
  boxText: {
    fontSize: 16,
    color: "#4A90E2",
    fontWeight: "600",
  },
  controls:{
    backgroundColor: '#ffffff',
    padding: 5,
    borderRadius:10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20, 
    position: 'relative',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: '95%',
    fontSize:80 ,
    
    
  },
  sort:{
    color:'blue',
    fontSize:50,
  },
  filter: {
    height: 20,
    width: '140%',
  },
  notificationContainer: {
    flex: 1,
    position: 'absolute', 
    bottom: "10%",
    left:"33%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "ghostwhite",
  },

 
  notificationInner: {
    backgroundColor: "azure",
    padding: 5,
    borderWidth: 1,
    borderColor: "lightsteelblue",
    borderRadius: 2,
    alignItems: "center",
  },

  swipeContainer: {
    flex: 1,
    flexDirection: "row",
    width: 200,
    height: 30,
    marginTop: 20,
  },

  swipeItem: {
    width: 200,
    height: 30,
    backgroundColor: "azure",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "slategrey",
  },

  swipeItemText: {
    textAlign: "center",
    color: "slategrey",
  },

  swipeBlank: {
    width: 5,
    height: 30,
  },

  images: {
    width: 200, 
    height: 150,
    alignSelf:"center",
  }

});
