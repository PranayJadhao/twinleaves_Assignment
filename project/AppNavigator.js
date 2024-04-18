// AppNavigator.js

import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ProductsScreen from "./Screens/ProductsScreen";
import CartScreen from "./Screens/CartScreen";
import ProductDetailsScreen from "./Screens/ProductDetailsScreen";
import BarcodeScannerScreen from "./Screens/BarcodeScannerScreen";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import LoginScreen from "./Screens/LoginScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#5a189a",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="loginscreen" component={LoginScreen} />
      <Stack.Screen
        name="Products"
        component={ProductsScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <View style={styles.headerRightContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Cart", { cartItems })}
                style={styles.headerRightButton}
              >
                <FontAwesome name="shopping-cart" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("BarcodeScanner")}
                style={styles.headerRightButton}
              >
                <FontAwesome name="barcode" size={24} color="white" />
              </TouchableOpacity>
            </View>
          ),
        })}
      />
      <Stack.Screen name="Cart">
        {(props) => <CartScreen {...props} cartItems={cartItems} />}
      </Stack.Screen>
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
      <Stack.Screen name="BarcodeScanner" component={BarcodeScannerScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerRightContainer: {
    flexDirection: "row",
    marginRight: 15,
  },
  headerRightButton: {
    marginRight: 15,
  },
});

export default AppNavigator;
