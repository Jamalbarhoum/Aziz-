import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom:100,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    
  },
  shopByCategory: {
    marginBottom: 10,
    alignItems: "center",
  },
  textSm: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginVertical: 10,
    textShadowColor: "#aaa",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  swipeTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  swipeText: {
    fontSize: 16,
    color: "#333",
    marginRight: 5,
  },
  icon: {
    fontSize: 16,
    color: "#333",
  },
  containerCategory: {
    flexDirection: "row",
    
  },
  box1Category: {
    width: width * 0.7,
    padding: 10,
    marginHorizontal: 5,
    
  },
  boxBackground: {
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    padding: 10,
    alignItems: "center",
   
  },
  image: {
    width: width * 0.6,
    height: 150,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  price: {
    fontSize: 14,
    color: "#888",
    marginTop: 5,
  },
  addButton: {
    backgroundColor: "#00f",
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  addButtonText: {
    fontSize: 24,
    color: "#fff",
  },
  cartContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  cartQuantity: {
    fontSize: 16,
    marginRight: 10,
  },
  removeButton: {
    backgroundColor: "#f00",
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  removeButtonText: {
    fontSize: 24,
    color: "#fff",
  },
  removeItemButton: {
    marginLeft: 10,
  },
  removeItemText: {
    color: "#f00",
    fontSize: 14,
  },
});

export default styles;
