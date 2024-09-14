import { View, ScrollView, StyleSheet } from "react-native";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Marquee from "../Marquee/Marquee";
import Category from "../Category/Category";
import Offers from "../Offers/Offers";
import Recommended from "../Recommended/Recommended";

const Home = () => {
  return (
    <View>
      <ScrollView>
        <Category />
        <Offers />
        <Recommended />
      </ScrollView>
    
    </View>
  );
};

export default Home;
