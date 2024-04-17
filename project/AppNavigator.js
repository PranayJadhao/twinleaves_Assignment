import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ProductsScreen from "./Screens/ProductsScreen";
import CartScreen from "./Screens/CartScreen";
import ProductDetailsScreen from "./Screens/ProductDetailsScreen";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
   
      <Stack.Navigator>
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
                <FontAwesome
                  name="shopping-cart"
                  size={24}
                  color="black"
                  style={{ marginRight: 15 }}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
      </Stack.Navigator>
 
  );
};

export default AppNavigator;
