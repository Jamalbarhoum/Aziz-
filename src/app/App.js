import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home/Home";
import BottomTab from "./BottomTab/BottomTab";
import Navbar from "./Navbar/Navbar";
import Marquee from "./Marquee/Marquee";
import { View } from "react-native";
const Stack = createStackNavigator(); // تعريف المتغير Stack

export default function App() {
  return (
    <>
      <View>
        <Navbar />
        <Marquee />    
      </View>

      <Stack.Navigator initialRouteName="Aziz Mart">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Aziz Mart" component={BottomTab} />
      </Stack.Navigator>
    </>
  );
}
