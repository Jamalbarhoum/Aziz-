import React, { useState, useRef ,useContext } from "react";
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
import { CartContext } from '../CartProvider';
const Recommended = () => {

  const { cartItems, setCartItems } = useContext(CartContext);
  const [data, setDate] = useState([
    {
      id: 16,
      description: "drinks",
      price:3.99,
      imageUrl: "https://m.media-amazon.com/images/I/614olGRSMVL.jpg",
    },
    {
      id: 15,
      description: "Chips",
      price:3.99,
      imageUrl:
        "https://zouqsweet.com/storage/d03239ce-6f3a-4155-84af-a2a9e869e42a-300x300.jpeg",
    },
    {
      id: 14,
      description: "Chocolate",
      price:3.99,
      imageUrl:
        "https://sc01.alicdn.com/kf/UTB8HrDiGyaMiuJk43PTq6ySmXXai/Milka-Chocolate-100g-All-Flavors-Available.jpg",
    },
    {
      id: 13,
      description: "drinks",
      price:3.99,
      imageUrl: "https://m.media-amazon.com/images/I/614olGRSMVL.jpg",
    },
    {
      id: 12,
      description: "Chips",
      price:3.99,
      imageUrl:
        "https://zouqsweet.com/storage/d03239ce-6f3a-4155-84af-a2a9e869e42a-300x300.jpeg",
    },
    {
      id: 10,
      description: "Chocolate",
      price:3.99,
      imageUrl:
        "https://sc01.alicdn.com/kf/UTB8HrDiGyaMiuJk43PTq6ySmXXai/Milka-Chocolate-100g-All-Flavors-Available.jpg",
    },
    {
      id: 11,
      description: "drinks",
      price:3.99,
      imageUrl: "https://m.media-amazon.com/images/I/614olGRSMVL.jpg",
    },
    {
      id: 9,
      description: "Chips",
      price:3.99,
      imageUrl:
        "https://zouqsweet.com/storage/d03239ce-6f3a-4155-84af-a2a9e869e42a-300x300.jpeg",
    },
    {
      id: 8,
      description: "Chocolate",
      price:3.99,
      imageUrl:
        "https://sc01.alicdn.com/kf/UTB8HrDiGyaMiuJk43PTq6ySmXXai/Milka-Chocolate-100g-All-Flavors-Available.jpg",
    },
    {
      id: 7,
      description: "drinks",
      price:3.99,
      imageUrl: "https://m.media-amazon.com/images/I/614olGRSMVL.jpg",
    },
    {
      id: 6,
      description: "Chips",
      price:3.99,
      imageUrl:
        "https://zouqsweet.com/storage/d03239ce-6f3a-4155-84af-a2a9e869e42a-300x300.jpeg",
    },
    {
      id: 4,
      description: "Chocolate",
      price:3.99,
      imageUrl:
        "https://sc01.alicdn.com/kf/UTB8HrDiGyaMiuJk43PTq6ySmXXai/Milka-Chocolate-100g-All-Flavors-Available.jpg",
    },
    {
      id: 5,
      description: "drinks",
      price:3.99,
      imageUrl: "https://m.media-amazon.com/images/I/614olGRSMVL.jpg",
    },
    {
      id: 2,
      description: "Chips",
      price:3.99,
      imageUrl:
        "https://zouqsweet.com/storage/d03239ce-6f3a-4155-84af-a2a9e869e42a-300x300.jpeg",
    },
    {
      id: 1,
      description: "Chocolate Chocolate Chocolate Chocolate Chocolate",
      price:3.99,
      imageUrl:
        "https://sc01.alicdn.com/kf/UTB8HrDiGyaMiuJk43PTq6ySmXXai/Milka-Chocolate-100g-All-Flavors-Available.jpg",
    },
    
  ]);

  const [showSwipeText, setShowSwipeText] = useState(true);

  const scrollViewRef = useRef(null);
  console.log(cartItems);

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

  const handleAddToCart = (item) => {
    setCartItems((prevCartItems) => {
      const itemIndex = prevCartItems.findIndex((cartItem) => cartItem.id === item.id);
      if (itemIndex !== -1) {
        const updatedCart = [...prevCartItems];
        updatedCart[itemIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCartItems, { ...item, quantity: 1 }];
      }
    });
  };
  
  const handleRemoveFromCart = (item) => {
    setCartItems((prevCartItems) => {
      const itemIndex = prevCartItems.findIndex((cartItem) => cartItem.id === item.id);
      if (itemIndex !== -1) {
        const updatedCart = [...prevCartItems];
        if (updatedCart[itemIndex].quantity > 1) {
          updatedCart[itemIndex].quantity -= 1;
        } else {
          updatedCart.splice(itemIndex, 1);
        }
        return updatedCart;
      }
      return prevCartItems;
    });
  };

  const handleRemoveItem = (item) => {
    setCartItems((prevCartItems) => {
      const updatedCart = prevCartItems.filter((cartItem) => cartItem.id !== item.id);
      return updatedCart;
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
  <View style={styles.box1Category} key={elm.id}>
    <View style={styles.boxBackground}>
      <Image
        resizeMode="contain"
        style={styles.boxedText}
        source={{ uri: elm.imageUrl }}
      />
     
      
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => handleAddToCart(elm)}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>

      {cartItems.find((cartItem) => cartItem.id === elm.id) && (
        <View style={styles.cartContainer}>
          <Text style={styles.cartQuantity}>
            {cartItems.find((cartItem) => cartItem.id === elm.id)?.quantity}
          </Text>

          <TouchableOpacity
            style={styles.removeButton}
            onPress={() => handleRemoveFromCart(elm)}
          >
            <Text style={styles.removeButtonText}>-</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.removeItemButton}
            onPress={() => handleRemoveItem(elm)}
          >
            <Text style={styles.removeItemText}>Remove</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
    {/* السعر تحت الوصف خارج الصندوق */}
    <Text style={styles.priceText} ><Text style={{color:"#0129",fontWeight:"normal"}}>JD</Text> {elm.price.toFixed(2)}</Text>
    <Text style={styles.descriptionText} numberOfLines={2}>{elm.description}</Text>

  </View>
))}

        </ScrollView>
      </View>
    </>
  );
}  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    height: 400,
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
    height:"120%",
   
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    position: "relative",
  },
  boxBackground: {
   
    width: "100%",
    height: 180,
    borderWidth :1,
    borderRadius:5,
    borderColor:"gray",
    backgroundColor: "#fff",
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
  priceText: {
    fontSize: 16, // حجم الخط
    color: '#000', // لون الخط (يمكن تغييره حسب الحاجة)
    marginTop: 5, // مسافة فوق السعر
    fontWeight: 'bold', // جعل السعر عريضًا
  },
  descriptionText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    height:"100%",
    marginTop: 5,
    marginBottom: 10,
    paddingHorizontal: 5,
    maxHeight: 40, // تحديد الحد الأقصى للارتفاع
    overflow: 'hidden', // إخفاء المحتوى الزائد
  },
});

export default Recommended;
