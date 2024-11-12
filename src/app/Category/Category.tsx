import {
  Image,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import Style from "../Style.js";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get("window");

const Category = () => {
  const [DataCategories, setDataCategories] = useState([]);
  const [showSwipeText, setShowSwipeText] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollViewRef = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get("http://192.168.8.107:3000/categories/categories");
        if (res.data.success) {
          setDataCategories(res.data.result);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getCategories();
  }, []);

  const handleScroll = (event) => {
    const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
    const isEndReached =
      contentOffset.x >= contentSize.width - layoutMeasurement.width - 1;
    setShowSwipeText(!isEndReached);
    setScrollPosition(contentOffset.x);
  };

  const handlePress = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
    setShowSwipeText(false);
  };

  const handleCategoryPress = (categoryId) => {
    navigation.navigate("ProductsScreen", { categoryId });
  };

  return (
    <View style={Style.container}>
      <View style={Style.shopByCategory}>
        <Text style={Style.textSm}>Shop By Category</Text>
        {showSwipeText && (
          <TouchableOpacity onPress={handlePress}>
            <View style={Style.swipeTextContainer}>
              <Text style={Style.swipeText}>Swipe</Text>
              <Icon name="arrow-right" style={Style.icon} />
            </View>
          </TouchableOpacity>
        )}
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={Style.containerCategory}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        ref={scrollViewRef}
      >
        {DataCategories && DataCategories.length > 0 ? (
          DataCategories.map((category, index) => (
            <TouchableOpacity key={index} onPress={() => handleCategoryPress(category.id)}>
              <View style={Style.box1Category}>
                <Image
                  resizeMode="contain"
                  style={Style.boxedText}
                  source={{
                    uri: category.image,
                  }}
                />
                <Text style={Style.text}>{category.name}</Text>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <Text>Loading categories...</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default Category;
