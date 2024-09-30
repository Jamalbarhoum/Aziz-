import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home/Home";
import BottomTab from "./BottomTab/BottomTab";
import Navbar from "./Navbar/Navbar";
import Marquee from "./Marquee/Marquee";
import { View,Button } from "react-native";
import { CartProvider } from "./CartProvider"; 
import { useNavigation } from "@react-navigation/native"; 
const Stack = createStackNavigator(); // تعريف المتغير Stack

export default function App() {
  const navigation = useNavigation();
  return (
    <>
      <View>
        <Navbar />
       
      </View>
    <CartProvider>

    <Stack.Navigator initialRouteName="Aziz Mart">
        <Stack.Screen name="Home" component={Home} />
 
        <Stack.Screen
          name="Aziz Mart"
          component={BottomTab}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </CartProvider>

    </>
  );
}
