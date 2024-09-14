import {
    Image,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Dimensions,
  } from "react-native";
  import React, { useState, useRef } from "react";
  import Style from "../Style.js";
  import Icon from "react-native-vector-icons/FontAwesome";
  
  const { height, width } = Dimensions.get("window");
  
  const Category = () => {
    const [showSwipeText, setShowSwipeText] = useState(true);
    const [scrollPosition, setScrollPosition] = useState(0);
  
    const [data, setDate] = useState([
      {
        description: "Chips",
        imageUrl:
          "https://zouqsweet.com/storage/d03239ce-6f3a-4155-84af-a2a9e869e42a-300x300.jpeg",
      },
      {
        description: "Chocolate",
        imageUrl:
          "https://sc01.alicdn.com/kf/UTB8HrDiGyaMiuJk43PTq6ySmXXai/Milka-Chocolate-100g-All-Flavors-Available.jpg",
      },
      {
        description: "drinks",
        imageUrl: "https://m.media-amazon.com/images/I/614olGRSMVL.jpg",
      },
      {
        description: "Chips",
        imageUrl:
          "https://zouqsweet.com/storage/d03239ce-6f3a-4155-84af-a2a9e869e42a-300x300.jpeg",
      },
      {
        description: "Chocolate",
        imageUrl:
          "https://sc01.alicdn.com/kf/UTB8HrDiGyaMiuJk43PTq6ySmXXai/Milka-Chocolate-100g-All-Flavors-Available.jpg",
      },
      {
        description: "drinks",
        imageUrl: "https://m.media-amazon.com/images/I/614olGRSMVL.jpg",
      },
      {
        description: "Chips",
        imageUrl:
          "https://zouqsweet.com/storage/d03239ce-6f3a-4155-84af-a2a9e869e42a-300x300.jpeg",
      },
      {
        description: "Chocolate",
        imageUrl:
          "https://sc01.alicdn.com/kf/UTB8HrDiGyaMiuJk43PTq6ySmXXai/Milka-Chocolate-100g-All-Flavors-Available.jpg",
      },
      {
        description: "drinks",
        imageUrl: "https://m.media-amazon.com/images/I/614olGRSMVL.jpg",
      },
      {
        description: "Chips",
        imageUrl:
          "https://zouqsweet.com/storage/d03239ce-6f3a-4155-84af-a2a9e869e42a-300x300.jpeg",
      },
      {
        description: "Chocolate",
        imageUrl:
          "https://sc01.alicdn.com/kf/UTB8HrDiGyaMiuJk43PTq6ySmXXai/Milka-Chocolate-100g-All-Flavors-Available.jpg",
      },
      {
        description: "drinks",
        imageUrl: "https://m.media-amazon.com/images/I/614olGRSMVL.jpg",
      },
      {
        description: "Chips",
        imageUrl:
          "https://zouqsweet.com/storage/d03239ce-6f3a-4155-84af-a2a9e869e42a-300x300.jpeg",
      },
      {
        description: "Chocolate",
        imageUrl:
          "https://sc01.alicdn.com/kf/UTB8HrDiGyaMiuJk43PTq6ySmXXai/Milka-Chocolate-100g-All-Flavors-Available.jpg",
      },
      {
        description: "drinks",
        imageUrl: "https://m.media-amazon.com/images/I/614olGRSMVL.jpg",
      },
      {
        description: "Chips",
        imageUrl:
          "https://zouqsweet.com/storage/d03239ce-6f3a-4155-84af-a2a9e869e42a-300x300.jpeg",
      },
      {
        description: "Chocolate",
        imageUrl:
          "https://sc01.alicdn.com/kf/UTB8HrDiGyaMiuJk43PTq6ySmXXai/Milka-Chocolate-100g-All-Flavors-Available.jpg",
      },
      {
        description: "drinks",
        imageUrl: "https://m.media-amazon.com/images/I/614olGRSMVL.jpg",
      },
      {
        description: "Chips",
        imageUrl:
          "https://zouqsweet.com/storage/d03239ce-6f3a-4155-84af-a2a9e869e42a-300x300.jpeg",
      },
      {
        description: "Chocolate",
        imageUrl:
          "https://sc01.alicdn.com/kf/UTB8HrDiGyaMiuJk43PTq6ySmXXai/Milka-Chocolate-100g-All-Flavors-Available.jpg",
      },
      {
        description: "drinks",
        imageUrl: "https://m.media-amazon.com/images/I/614olGRSMVL.jpg",
      },
      {
        description: "Chips",
        imageUrl:
          "https://zouqsweet.com/storage/d03239ce-6f3a-4155-84af-a2a9e869e42a-300x300.jpeg",
      },
      {
        description: "Chocolate",
        imageUrl:
          "https://sc01.alicdn.com/kf/UTB8HrDiGyaMiuJk43PTq6ySmXXai/Milka-Chocolate-100g-All-Flavors-Available.jpg",
      },
      {
        description: "drinks",
        imageUrl: "https://m.media-amazon.com/images/I/614olGRSMVL.jpg",
      },
      {
        description: "Chips",
        imageUrl:
          "https://zouqsweet.com/storage/d03239ce-6f3a-4155-84af-a2a9e869e42a-300x300.jpeg",
      },
      {
        description: "Chocolate",
        imageUrl:
          "https://sc01.alicdn.com/kf/UTB8HrDiGyaMiuJk43PTq6ySmXXai/Milka-Chocolate-100g-All-Flavors-Available.jpg",
      },
      {
        description: "drinks",
        imageUrl: "https://m.media-amazon.com/images/I/614olGRSMVL.jpg",
      },
      {
        description: "Chips",
        imageUrl:
          "https://zouqsweet.com/storage/d03239ce-6f3a-4155-84af-a2a9e869e42a-300x300.jpeg",
      },
      {
        description: "Chocolate",
        imageUrl:
          "https://sc01.alicdn.com/kf/UTB8HrDiGyaMiuJk43PTq6ySmXXai/Milka-Chocolate-100g-All-Flavors-Available.jpg",
      },
      {
        description: "drinks",
        imageUrl: "https://m.media-amazon.com/images/I/614olGRSMVL.jpg",
      },
      {
        description: "Chips",
        imageUrl:
          "https://zouqsweet.com/storage/d03239ce-6f3a-4155-84af-a2a9e869e42a-300x300.jpeg",
      },
      {
        description: "Chocolate",
        imageUrl:
          "https://sc01.alicdn.com/kf/UTB8HrDiGyaMiuJk43PTq6ySmXXai/Milka-Chocolate-100g-All-Flavors-Available.jpg",
      },
      {
        description: "drinks",
        imageUrl: "https://m.media-amazon.com/images/I/614olGRSMVL.jpg",
      },
      {
        description: "Chips",
        imageUrl:
          "https://zouqsweet.com/storage/d03239ce-6f3a-4155-84af-a2a9e869e42a-300x300.jpeg",
      },
      {
        description: "Chocolate",
        imageUrl:
          "https://sc01.alicdn.com/kf/UTB8HrDiGyaMiuJk43PTq6ySmXXai/Milka-Chocolate-100g-All-Flavors-Available.jpg",
      },
      {
        description: "drinks",
        imageUrl: "https://m.media-amazon.com/images/I/614olGRSMVL.jpg",
      },
      {
        description: "Chips",
        imageUrl:
          "https://zouqsweet.com/storage/d03239ce-6f3a-4155-84af-a2a9e869e42a-300x300.jpeg",
      },
      {
        description: "Chocolate",
        imageUrl:
          "https://sc01.alicdn.com/kf/UTB8HrDiGyaMiuJk43PTq6ySmXXai/Milka-Chocolate-100g-All-Flavors-Available.jpg",
      },
      {
        description: "drinks",
        imageUrl: "https://m.media-amazon.com/images/I/614olGRSMVL.jpg",
      },
      {
        description: "Chips",
        imageUrl:
          "https://zouqsweet.com/storage/d03239ce-6f3a-4155-84af-a2a9e869e42a-300x300.jpeg",
      },
      {
        description: "Chocolate",
        imageUrl:
          "https://sc01.alicdn.com/kf/UTB8HrDiGyaMiuJk43PTq6ySmXXai/Milka-Chocolate-100g-All-Flavors-Available.jpg",
      },
      {
        description: "drinks",
        imageUrl: "https://m.media-amazon.com/images/I/614olGRSMVL.jpg",
      },
      {
        description: "Chips",
        imageUrl:
          "https://zouqsweet.com/storage/d03239ce-6f3a-4155-84af-a2a9e869e42a-300x300.jpeg",
      },
      {
        description: "Chocolate",
        imageUrl:
          "https://sc01.alicdn.com/kf/UTB8HrDiGyaMiuJk43PTq6ySmXXai/Milka-Chocolate-100g-All-Flavors-Available.jpg",
      },
      {
        description: "drinks",
        imageUrl: "https://m.media-amazon.com/images/I/614olGRSMVL.jpg",
      },
      {
        description: "Chips",
        imageUrl:
          "https://zouqsweet.com/storage/d03239ce-6f3a-4155-84af-a2a9e869e42a-300x300.jpeg",
      },
      {
        description: "Chocolate",
        imageUrl:
          "https://sc01.alicdn.com/kf/UTB8HrDiGyaMiuJk43PTq6ySmXXai/Milka-Chocolate-100g-All-Flavors-Available.jpg",
      },
      {
        description: "drinks",
        imageUrl: "https://m.media-amazon.com/images/I/614olGRSMVL.jpg",
      },
      {
        description: "Chips",
        imageUrl:
          "https://zouqsweet.com/storage/d03239ce-6f3a-4155-84af-a2a9e869e42a-300x300.jpeg",
      },
      {
        description: "Chocolate",
        imageUrl:
          "https://sc01.alicdn.com/kf/UTB8HrDiGyaMiuJk43PTq6ySmXXai/Milka-Chocolate-100g-All-Flavors-Available.jpg",
      },
      {
        description: "drinks",
        imageUrl: "https://m.media-amazon.com/images/I/614olGRSMVL.jpg",
      },
      {
        description: "Chips",
        imageUrl:
          "https://zouqsweet.com/storage/d03239ce-6f3a-4155-84af-a2a9e869e42a-300x300.jpeg",
      },
      {
        description: "Chocolate",
        imageUrl:
          "https://sc01.alicdn.com/kf/UTB8HrDiGyaMiuJk43PTq6ySmXXai/Milka-Chocolate-100g-All-Flavors-Available.jpg",
      },
      {
        description: "drinks",
        imageUrl: "https://m.media-amazon.com/images/I/614olGRSMVL.jpg",
      },
      {
        description: "Chips",
        imageUrl:
          "https://zouqsweet.com/storage/d03239ce-6f3a-4155-84af-a2a9e869e42a-300x300.jpeg",
      },
      {
        description: "Chocolate",
        imageUrl:
          "https://sc01.alicdn.com/kf/UTB8HrDiGyaMiuJk43PTq6ySmXXai/Milka-Chocolate-100g-All-Flavors-Available.jpg",
      },
      {
        description: "drinks",
        imageUrl: "https://m.media-amazon.com/images/I/614olGRSMVL.jpg",
      },
    ]);
  
    const scrollViewRef = useRef(null);
  
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
  
    return (
      <View style={Style.container}>
        <View style={Style.shopByCategory}>
          <Text style={Style.textSm}>Shop By Category </Text>
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
          {data.map((elm, index) => (
            <View key={index} style={Style.box1Category}>
              <Image
                resizeMode="contain"
                style={Style.boxedText}
                source={{
                  uri: elm.imageUrl,
                }}
              />
              <Text style={Style.text}>{elm.description}</Text>
            </View>
          ))}
        </ScrollView>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <View
            style={{
              width: width / 2,
              borderTopColor: "#fff",
              marginTop: 20,
  
              backgroundColor: "white",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 0.2,
              shadowRadius: 5,
              elevation: 2,
              position: "relative",
            }}
          />
  
          <View
            style={{
              position: "absolute",
              bottom: -5,
              left: scrollPosition / 10,
              height: 3,
              width: Math.max(width / 2 - scrollPosition / 5, 0), // Prevent negative width
              backgroundColor: "rgb(160,215,235)",
            }}
          />
        </View>
      </View>
    );
  };
  
  export default Category;
  