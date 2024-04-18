import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./AppNavigator"; // Assuming your navigator is in AppNavigator.js
import LoginScreen from "./Screens/LoginScreen";

const App = () => {
  return (
     <NavigationContainer>
      <AppNavigator />
     </NavigationContainer>
  
  );
};

export default App;
