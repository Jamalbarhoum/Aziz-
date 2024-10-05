
import { View ,Text ,StyleSheet} from "react-native";


export default  OrderSummary = ({ items }) => {
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
          Total: {items.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)} JD
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
   
      fontSize: 24, 
      fontWeight: 'bold', 
      color: '#000', 
      textAlign: 'center', 
      padding: 10, 
      backgroundColor: '#F9F9F9',
  
    },
  }); 