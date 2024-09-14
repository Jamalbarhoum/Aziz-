import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const Style = StyleSheet.create({
  container: {
    marginTop: 2,
    alignItems: "center",
   
    flexDirection: "column",

    width: width,
  },
  containerCategory: {
 
    width: width * 3, 
    
    display:"flex",
    flexDirection: "row",
    flexWrap:"wrap"
  },
  boxedText: {
    width: 100,
    fontSize: 10,
    borderWidth: 3,
    borderColor: "rgb(160,215,235)",
    padding: 5,
    marginHorizontal: 5, // زيادة المساحة بين العناصر
    height: 100,
    borderRadius: 500,
  },
  text: {
    fontSize: 15, 
    fontWeight: "bold", 
    color: "#333", 
    textAlign: "center", 
    marginVertical: 10, 
    // fontFamily: "Cochin", 
    textShadowColor: "#aaa",
    textShadowOffset: { width: 1, height: 1 }, 
    textShadowRadius: 3,
  },
  textSm: {
    fontSize: 20, 
    fontWeight: "bold",
    color: "#333", 
    textAlign: "center",
    marginVertical: 10, 
    // fontFamily: "Cochin", 
    textShadowColor: "#aaa", 
    textShadowOffset: { width: 1, height: 1 }, 
    textShadowRadius: 3, 
  },
  box1Category: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  shopByCategory: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center",
    width: width,
    padding:20,
  },
  swipeTextContainer: {
    flexDirection: "row",
    alignItems: "center",
   
    backgroundColor: "rgba(255, 255, 255, 0.8)", 
    borderRadius: 20,

    marginHorizontal: 10,
    marginVertical: 5,
  },
  swipeText: {
    fontSize: 16,
    color: "#000",
    marginRight: 5, 
  },
});

export default Style;
