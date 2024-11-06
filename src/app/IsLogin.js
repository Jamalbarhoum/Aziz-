import React, { useState, useEffect } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function IsLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  // التحقق من حالة تسجيل الدخول عند بدء التطبيق
  useEffect(() => {
    checkLoginStatus();
  }, []);

  // التحقق مما إذا كان المستخدم مسجلاً الدخول
  const checkLoginStatus = async () => {
    const token = await AsyncStorage.getItem('userToken');
    setIsLoggedIn(!!token);
  };

  // تسجيل الدخول وتخزين رمز الجلسة
  const login = async () => {
    // في الواقع، يمكنك الحصول على رمز الجلسة بعد تسجيل الدخول من الخادم
    const token = 'example-token';
    await AsyncStorage.setItem('userToken', token);
    setIsLoggedIn(true);
  };

  // تسجيل الخروج وحذف رمز الجلسة
  const logout = async () => {
    await AsyncStorage.removeItem('userToken');
    setIsLoggedIn(false);
  };

  // عرض مؤشر التحميل حتى يتم التحقق من حالة تسجيل الدخول
  if (isLoggedIn === null) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View>
      {isLoggedIn ? (
        <View>
          <Text>Welcome back! You are logged in.</Text>
          <Button title="Logout" onPress={logout} />
        </View>
      ) : (
        <View>
          <Text>Please log in</Text>
          <Button title="Login" onPress={login} />
        </View>
      )}
    </View>
  );
}
