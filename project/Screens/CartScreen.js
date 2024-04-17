import React from "react";
import { View, Text, Button, Alert, FlatList } from "react-native";

const CartScreen = ({ cartItems }) => {
   
  const checkout = () => {
    // Checkout logic
    Alert.alert("Success", "Checkout completed!");
    };


  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Cart Screen</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            <Text>{item.title}</Text>
            {/* Add more product details here */}
          </View>
        )}
      />
      <Button title="Checkout" onPress={checkout} />
    </View>
  );
};

export default CartScreen;
