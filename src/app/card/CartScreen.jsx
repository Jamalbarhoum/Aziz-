import React, { useContext, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  Text,
  Button,
  ScrollView,
  TextInput,
} from "react-native";
import { CartContext } from "../CartProvider";
import Icon from "react-native-vector-icons/FontAwesome";

// import React from 'react';
// import { Button } from 'react-native';
// import { Payment } from "react-native-payments";
const OrderSummary = ({ items }) => {
  return (
    <View style={styles_OrderSummary.container}>
      <Text style={styles_OrderSummary.header}>Order Summary</Text>
      {items.map((item, index) => (
        <View key={index} style={styles_OrderSummary.itemRow}>
          <Text style={styles_OrderSummary.itemText}>
            {item.price * item.quantity} JD  
            <Text style={styles_OrderSummary.itemDescription}>   {item.description}</Text>
          </Text>
        </View>
      ))}
      <Text style={styles_OrderSummary.totalText}>
        Total: {items.reduce((total, item) => total + (item.price * item.quantity), 0)} JD
      </Text>
    </View>
  );
};
const styles_OrderSummary = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
  itemDescription: {
    fontSize: 14,
    color: '#888',
    fontStyle: 'italic',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'right',
    color: '#2A9D8F',
  },
});
const PaymentForm = () => {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [toggle, setToggle] = useState(false);

  const [cashButtonColor, setCashButtonColor] = useState("#3E9FC0");
  const [cashButtonColor2, setCashButtonColor2] = useState("#3E9FC0");
  const handlePayment = () => {
    // هنا يمكنك معالجة الدفع باستخدام معلومات النموذج
    console.log({
      name,
      cardNumber,
      expiryDate,
      cvv,
    });
  };

  return (
    <>
      <View style={stylesF.headerContainer}>
        <Text style={styles_OrderSummary.header} >Payment methods</Text>
        <View style={stylesF.buttonContainer}>
          {toggle && (
            <Button
              title="Cancel"
              onPress={() => {
                setToggle(!toggle);
              }}
            />
          )}
        </View>
      </View>
      <View style={stylesF.container}>
        <View>
          {!toggle && (
            <Button
              title="Payment"
              color={cashButtonColor2}
              onPress={() => {
                setToggle(!toggle);
              }}
            />
          )}

          {!toggle && (
            <Button
              title="Cash"
              color={cashButtonColor}
              onPress={() => {
                setCashButtonColor("green");
                setCashButtonColor2("#3E9FC0");
              }}
            />
          )}
        </View>
        {toggle && (
          <ScrollView>
            <View>
              <Text style={stylesF.label}>Cardholder's Name</Text>
              <TextInput
                style={stylesF.input}
                value={name}
                onChangeText={setName}
                placeholder="Enter your name"
              />

              <Text style={stylesF.label}>Card Number</Text>
              <TextInput
                style={stylesF.input}
                value={cardNumber}
                onChangeText={setCardNumber}
                placeholder="Enter card number"
                keyboardType="numeric"
              />

              <Text style={stylesF.label}>Expiry Date (MM/YY)</Text>
              <TextInput
                style={stylesF.input}
                value={expiryDate}
                onChangeText={setExpiryDate}
                placeholder="Enter expiry date"
              />

              <Text style={stylesF.label}>CVV</Text>
              <TextInput
                style={stylesF.input}
                value={cvv}
                onChangeText={setCvv}
                placeholder="Enter CVV"
                keyboardType="numeric"
              />

              <Button
                title="Proceed to Payment"
                onPress={() => {
                  handlePayment();
                  setToggle(!toggle);
                  setCashButtonColor("#3E9FC0");
                  setCashButtonColor2("green");
                }}
              />
            </View>
          </ScrollView>
        )}
      </View>
    </>
  );
};

const stylesF = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    height: "100%",
  },
  label: {
    marginVertical: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

function CartScreen() {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleOpenEditModal = () => {
    setSelectedItems(cartItems); // فتح المودال مع جميع العناصر
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedItems([]);
  };

  const handleIncreaseQuantity = (id) => {
    setSelectedItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (id) => {
    setSelectedItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setSelectedItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleSaveChanges = () => {
    setCartItems(selectedItems); // تحديث العناصر في سلة التسوق
    handleCloseModal();
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={handleOpenEditModal}
    >
      <Image source={{ uri: item.imageUrl }} style={styles.itemImage} />
      <View style={styles.quantityContainer}>
        <Text style={styles.quantityText}>x{item.quantity}</Text>
      </View>
      <View
        style={{
          direction: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.priceText}>
          <Text style={{ color: "#0129", fontWeight: "normal" }}>JD</Text>{" "}
          {item.price}
        </Text>
        <View style={styles.line}></View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.containerViewCard}>
        {cartItems.length === 0 ? (
          <Text style={styles.emptyText}>Your cart is empty.</Text>
        ) : (
          <FlatList
            data={cartItems}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true} // عرض العناصر بشكل أفقي
            showsHorizontalScrollIndicator={false} // إخفاء شريط التمرير
            style={styles.horizontalList} // إضافة نمط خاص
          />
        )}
        {cartItems.length !== 0 && (
          <Button color={"#3E9FC0"}  title="Edit Cart" onPress={handleOpenEditModal} />
        )}
      </View>
      {/* Modal for editing items */}
      {modalVisible && (
        <Modal transparent={true} visible={modalVisible} animationType="slide">
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Edit Cart Items</Text>
            <ScrollView>
              {selectedItems.map((item) => (
                <View key={item.id} style={styles.modalItem}>
                  <View style={styles.modalTextContainer}>
                    <Image
                      source={{ uri: item.imageUrl }}
                      style={styles.modalItemImage}
                    />
                    <Text style={styles.modalItemText} numberOfLines={1}>
                      {item.description}
                    </Text>
                    <View style={styles.modalButtonContainer}>
                      <Icon
                        onPress={() => handleDecreaseQuantity(item.id)}
                        name="minus"
                        size={15}
                        color="black"
                      />

                      <Text style={styles.modalQuantityText}>
                        {item.quantity}
                      </Text>

                      <Icon
                        onPress={() => handleIncreaseQuantity(item.id)}
                        name="plus"
                        size={15}
                        color="black"
                      />
                      <Icon
                        onPress={() => handleRemoveItem(item.id)}
                        name="trash"
                        size={22}
                        color="red"
                      />
                    </View>
                  </View>
                </View>
              ))}
            </ScrollView>
            <Button color={"#3E9FC0"} title="Save Changes" onPress={handleSaveChanges} />
            <Button color={"#3E9FC0"}  title="Cancel" onPress={handleCloseModal} />
          </View>
        </Modal>
      )}
      {cartItems.length > 0 && <>
        <OrderSummary items={cartItems} />
        <PaymentForm />
      
        
      
      </> }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#fff",
    height:"100%",
    zIndex:1,
    position:"static"

  },
  containerViewCard: {
    flex: 1,
   
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  emptyText: {
    fontSize: 18,
    textAlign: "center",
    color: "#888",
  },

  itemImage: {
    width: 100,
    height: 100,
  },
  quantityContainer: {
    backgroundColor: "rgba(255, 0, 0, 0.7)",
    borderRadius: 5,
    padding: 5,
    marginTop: 5,
  },
  quantityText: {
    color: "#fff",
    fontWeight: "bold",
  },
  horizontalList: {
    paddingVertical: 10,
  },
  modalContainer: {
    height: "79%",
    width: "100%",
    backgroundColor: "#fff",
    position: "absolute", // تأكد من استخدام absolute لتغطية الشاشة بشكل كامل
    top: "15%", // المسافة من الأعلى
    left: 0,
    right: 0,
    paddingHorizontal: 0, // إزالة المسافة من الجوانب
    margin: 0, // إزالة أي هامش خارجي
  },
  modalTitle: {
    textAlign: "center",
    fontSize: 24,
    marginBottom: 20,
    color: "#000",
  },

  modalItemImage: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 10,
  },
  modalItem: {
    padding: 10,
  },
  modalTextContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1,
  },
  modalItemText: {
    width: 50,
    fontSize: 16,
    maxWidth: "100%",
  },
  modalButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 18,
  },
  modalQuantityText: {
    marginHorizontal: 1,
    fontSize: 16,
  },
  itemContainer: {
    flexDirection: "column",
    backgroundColor: "#red",
    paddingVertical: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    position: "relative", // لجعل موضع الكمية نسبة للصورة
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  quantityContainer: {
    position: "absolute", // لجعلها فوق الصورة
    top: 5, // المسافة من أعلى
    right: 5, // المسافة من اليمين
    backgroundColor: "rgba(255, 0, 0, 0.7)",
    borderRadius: 5,
    paddingVertical: 5, // تزايد الطول
    paddingHorizontal: 10, // تزايد العرض
  },
  line: {
    height: 2,
    backgroundColor: "#FF5733",
    marginVertical: 10,
    borderRadius: 5,
    width: "80%",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  priceText: {
    fontSize: 16, // حجم الخط
    color: "#000", // لون الخط (يمكن تغييره حسب الحاجة)
    marginTop: 5, // مسافة فوق السعر
    fontWeight: "bold", // جعل السعر عريضًا
  },
  txt: {
    color: "#000",
    fontSize: 22,
    padding: 3,
  },
});

export default CartScreen;
