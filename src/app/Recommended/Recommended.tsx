import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const { width } = Dimensions.get("window");

const Recommended = () => {

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



  const [showSwipeText, setShowSwipeText] = useState(true);
  const [cartItems, setCartItems] = useState({});
  const scrollViewRef = useRef(null);

  const handleScroll = (event) => {
    const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
    const isEndReached =
      contentOffset.x >= contentSize.width - layoutMeasurement.width - 1;
    setShowSwipeText(!isEndReached);
  };

  const handlePress = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
    setShowSwipeText(false);
  };

  const handleAddToCart = (index) => {
    setCartItems((prevCartItems) => ({
      ...prevCartItems,
      [index]: (prevCartItems[index] || 0) + 1,
    }));
  };

  const handleRemoveFromCart = (index) => {
    setCartItems((prevCartItems) => {
      const newCount = (prevCartItems[index] || 0) - 1;
      if (newCount <= 0) {
        const { [index]: _, ...rest } = prevCartItems;
        return rest;
      }
      return { ...prevCartItems, [index]: newCount };
    });
  };

  const handleRemoveItem = (index) => {
    setCartItems((prevCartItems) => {
      const { [index]: _, ...rest } = prevCartItems;
      return rest;
    });
  };

  return (
    <>
   
      <View style={styles.container}>
     
        <View style={styles.shopByCategory}>
          <Text style={styles.textSm}>Recommended For You</Text>
          {showSwipeText && (
            <TouchableOpacity onPress={handlePress}>
              <View style={styles.swipeTextContainer}>
                <Text style={styles.swipeText}>Swipe</Text>
                <Icon name="arrow-right" style={styles.icon} />
              </View>
            </TouchableOpacity>
          )}
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.containerCategory}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          ref={scrollViewRef}
        >
          {data.map((elm, index) => (
            <View key={index} style={styles.box1Category}>
              <View style={styles.boxBackground}>
                <Image
                  resizeMode="contain"
                  style={styles.boxedText}
                  source={{
                    uri: elm.imageUrl,
                  }}
                />
                <Text style={styles.text}>{elm.description}{index + 1}</Text>
                <TouchableOpacity
                  style={styles.addButton}
                  onPress={() => handleAddToCart(index)}
                >
                  <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
                {cartItems[index] > 0 && (
                  <View style={styles.cartContainer}>
                    <Text style={styles.cartQuantity}>{cartItems[index]}</Text>
                    <TouchableOpacity
                      style={styles.removeButton}
                      onPress={() => handleRemoveFromCart(index)}
                    >
                      <Text style={styles.removeButtonText}>-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.removeItemButton}
                      onPress={() => handleRemoveItem(index)}
                    >
                      <Text style={styles.removeItemText}>Remove</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
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
    fontSize: 14,
    color: "#333",
  },
  icon: {
    fontSize: 14,
    color: "#333",
    marginLeft: 5,
  },
  containerCategory: {
    alignItems: "center",
  },
  box1Category: {
    width: width / 2.5,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    position: "relative",
  },
  boxBackground: {
    width: "100%",
    height: 180,
    borderRadius: 12,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  boxedText: {
    width: 130,
    height: 130,
    position: "absolute",
  },
  text: {
    position: "absolute",
    bottom: 10,
    fontSize: 14,
    color: "#333",
    textAlign: "center",
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    paddingVertical: 5,
    borderRadius: 8,
  },
  addButton: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#f00",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  cartContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "rgba(255, 0, 0, 0.7)",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  cartQuantity: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  removeButton: {
    marginLeft: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  removeButtonText: {
    color: "#f00",
    fontSize: 16,
    fontWeight: "bold",
  },
  removeItemButton: {
    marginLeft: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  removeItemText: {
    color: "#f00",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default Recommended;
