import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image } from "react-native";
import axios from "axios";

const ProductsScreen = ({ route }) => {
  const { categoryId } = route.params; // استلام categoryId من المعاملات
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(`http://192.168.8.107:3000/api/products/${categoryId}`);
        if (res.data.success) {
          setProducts(res.data.reslute);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [categoryId]);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text>Products in Category {categoryId}</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 10, flexDirection: "row", alignItems: "center" }}>
            <Image source={{ uri: item.image }} style={{ width: 100, height: 100, marginRight: 10 }} />
            <Text>{item.product}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ProductsScreen;
