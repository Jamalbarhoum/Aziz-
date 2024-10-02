import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";

//ADD localhost address of your server
const API_URL = "http://192.168.100.24:3000";

const StripeApp = props => {
  const [email, setEmail] = useState();
  const [cardDetails, setCardDetails] = useState();
  const { confirmPayment, loading } = useConfirmPayment();

  const fetchPaymentIntentClientSecret = async () => {
    const response = await fetch(`${API_URL}/create-payment-intent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: 5000, // المبلغ بالهللة
        currency: "sar", // العملة
      }),
    });
    const { clientSecret, error } = await response.json();
    
    return { clientSecret, error };
  };

  const handlePayPress = async () => {
    console.log("data, =>", cardDetails);
    
    if (!cardDetails?.complete || !email) {
      Alert.alert("Please enter Complete card details and Email");
      return;
    }
  
    // جمع بيانات الفاتورة
    const billingDetails = {
      email: email,
    };
  
    try {
      console.log("jamal server");
      // استدعاء الخلفية للحصول على clientSecret
      const { clientSecret, error: fetchError } = await fetchPaymentIntentClientSecret();
      console.log(clientSecret);
      
      if (fetchError) {
        console.log("Unable to process payment");
        return;
      }
  
      // التأكد من الدفع باستخدام تفاصيل البطاقة
      const { paymentIntent, error: paymentError } = await confirmPayment(clientSecret, {
        type: "Card",  // تأكد من إرسال نوع الدفع بشكل صحيح
        paymentMethod: {
          card: cardDetails,  // إرسال تفاصيل البطاقة
          billingDetails: billingDetails,
        },
      });
  
      if (paymentError) {
        console.log(paymentError);
        alert(`Payment Confirmation Error: ${paymentError.message}`);
      } else if (paymentIntent) {
        alert("Payment Successful");
        console.log("Payment successful: ", paymentIntent);
      }
    } catch (e) {
      console.log(e);
    }
  };
  

  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        placeholder="E-mail"
        keyboardType="email-address"
        onChange={value => setEmail(value.nativeEvent.text)}
        style={styles.input}
      />
      <CardField
        postalCodeEnabled={true}
        placeholder={{
          number: "4242 4242 4242 4242",
        }}
        cardStyle={styles.card}
        style={styles.cardContainer}
        onCardChange={cardDetails => {
          setCardDetails(cardDetails);
        }}
      />
      <Button onPress={handlePayPress} title="Pay" disabled={loading} />
    </View>
  );
};
export default StripeApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 20,
  },
  input: {
    backgroundColor: "#efefefef",
    borderRadius: 8,
    fontSize: 20,
    height: 50,
    padding: 10,
  },
  card: {
    backgroundColor: "#efefefef",
  },
  cardContainer: {
    height: 50,
    marginVertical: 30,
  },
});
