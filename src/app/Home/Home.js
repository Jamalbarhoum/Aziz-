import { View, ScrollView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Marquee from "../Marquee/Marquee";
import Category from "../Category/Category";
import Offers from "../Offers/Offers";
import Recommended from "../Recommended/Recommended";
import axios from "axios";


// http://192.168.8.107:3000/users/login


const Home = () => {

 

  return (
    <View>
      <ScrollView>
        <Category/>
        <Offers />
        <Recommended />
      </ScrollView>

    </View>
  );
};

export default Home;
