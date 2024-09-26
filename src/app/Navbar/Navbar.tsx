import { View, Text, Image } from "react-native";
import React from "react";
import IconLiked from "react-native-vector-icons/FontAwesome";
import MarqueeExample from "../Marquee/Marquee";
const Navbar = () => {
  return (
    <View>
      <View
        style={{
          padding: 20,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          backgroundColor: "rgb(160,215,235)",
          flexDirection: "row",
        }}
      >
        <Image
          resizeMode="contain"
          style={{ width: 400, position: "absolute" }}
          source={require("../../Public/WhatsApp Image 2024-09-08 at 11.39.34 AM.jpeg")}
        />
        <IconLiked name="" size={30} color="#000" />
        
      </View>
      <MarqueeExample/>
    </View>
  );
};

export default Navbar;
