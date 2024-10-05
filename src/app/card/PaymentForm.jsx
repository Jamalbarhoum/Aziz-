
import { useState } from "react";
import { View ,TextInput ,ScrollView,Button,Text ,StyleSheet} from "react-native";

export default  PaymentForm = () => {
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
          <Text style={stylesF.header} >Payment methods</Text>
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
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
      },
  });

  