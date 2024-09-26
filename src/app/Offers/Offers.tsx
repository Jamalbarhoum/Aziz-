import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  Animated,
  PanResponder,
  ScrollView,
} from "react-native";

const { width } = Dimensions.get("window");

const Offers = () => {



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










  const scrollX = useRef(new Animated.Value(0)).current;
  const [isTouching, setIsTouching] = useState(false);
  const [animation, setAnimation] = useState(null);

  // إعداد PanResponder للتعامل مع اللمس
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        setIsTouching(true);
        if (animation) {
          animation.stop(); // إيقاف التمرير التلقائي عند بدء التمرير اليدوي
        }
      },
      onPanResponderMove: Animated.event([null, { dx: scrollX }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        setIsTouching(false);
        // إيقاف الحركة التلقائية بالكامل بعد انتهاء التمرير اليدوي
        if (animation) {
          animation.stop();
        }
      },
    })
  ).current;

  // تفعيل التمرير التلقائي
  const animateScroll = () => {
    const widthToScroll = width * 10; // عرض التمرير الكامل
    const animationInstance = Animated.loop(
      Animated.sequence([
        Animated.timing(scrollX, {
          toValue: -widthToScroll,
          duration: 70000, // مدة الحركة (70 ثانية)
          useNativeDriver: true,
        }),
        Animated.timing(scrollX, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }),
      ])
    );
    animationInstance.start();
    setAnimation(animationInstance);
  };

  useEffect(() => {
    animateScroll();
    return () => {
      if (animation) {
        animation.stop();
      }
    };
  }, [scrollX]);

  return (
    <View style={styles.container}>
      <Text style={styles.textSm}>Offers</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.marqueeContainer}
        {...panResponder.panHandlers}
      >
        <Animated.View
          style={{
            flexDirection: "row",
         
            transform: [{ translateX: scrollX }],
          }}
        >
          {data.map((elm, index) => (
            <View key={index} style={styles.box}>
              <Image
                resizeMode="contain"
                style={styles.image}
                source={{
                  uri:elm.imageUrl,
                }}
              />
              <Text style={styles.text}>{elm.description}{index + 1}</Text>
              <View style={styles.offerLabel}>
                <Text style={styles.offerLabelText}>Offers</Text>
              </View>
            </View>
          ))}
          {/* تكرار العناصر لجعل التمرير سلساً */}
  
        </Animated.View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   
    marginTop: 30,
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    marginBottom: 10,
    color: "#333",

  },
  marqueeContainer: {
    
    width: width,
    overflow: "hidden",
  },
  box: {
    width: width / 2, // Increase width
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    position: "relative",
  },
  image: {
    borderWidth:2,
    borderColor:"rgb(160,215,235)",
    width: 150,
    height: 150,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: "#333",
  },
  textSm: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginVertical: 10,
    textShadowColor: "#aaa",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  offerLabel: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'red',
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 5,
    zIndex: 1,
  },
  offerLabelText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default Offers;
