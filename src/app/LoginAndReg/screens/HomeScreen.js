import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native"; // تأكد من استيراد useNavigation
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import App from "../../App"
export default function HomeScreen() {
  const navigation = useNavigation();

  useEffect(() => {

    const timer = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: "App" }], // قم بتغيير "AnotherScreen" إلى اسم الشاشة المطلوبة
      });
    }, 2000); // تأخير 3 ثوانٍ

    return () => clearTimeout(timer); // تنظيف المؤقت عند إلغاء التثبيت
  }, [navigation]);

  return (
    <Background>
      <Logo />
      <Header>Welcome 💫</Header>
      <Paragraph>Congratulations you are logged in.</Paragraph>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: "StartScreen" }],
          })
        }
      >
        Sign out
      </Button>
    </Background>
  );
}
