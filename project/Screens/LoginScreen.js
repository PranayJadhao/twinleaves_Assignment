import {View,Text, TouchableOpacity} from "react-native"

const LoginScreen = () => {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity style={{backgroundColor:'lightblue' }}>
          <Text style={{padding:10}}>Login Button</Text>
        </TouchableOpacity>
      </View>
    );
}

export default LoginScreen;