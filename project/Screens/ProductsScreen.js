import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Pressable,
  Alert,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";

const windowWidth = Dimensions.get("window").width;

const ProductsScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const url = "https://fakestoreapi.com/products";

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  const addToCart = (item) => {
    // Function to add the item to cart
    setCartItems([...cartItems, item]);
      Alert.alert("Product Added", `${item.title} added to cart.`);
     
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>
        {item.title.length > 20
          ? `${item.title.substring(0, 20)}...`
          : item.title}
      </Text>
      <Pressable
        style={styles.imageContainer}
        onPress={() => handleProductPress(item)}
      >
        <Image
          source={{ uri: item.image }}
          style={styles.image}
          resizeMode="cover"
        />
      </Pressable>
      <Pressable style={styles.addToCartButton} onPress={() => addToCart(item)}>
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </Pressable>
    </View>
  );

  const handleProductPress = (item) => {
    navigation.navigate("ProductDetails", { product: item });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        numColumns={3}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.flatlistContent}
      />
    </View>
  );
};

const itemWidth = (windowWidth - 40) / 3; // Adjust padding if necessary

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  flatlistContent: {
    alignItems: "center",
    paddingBottom: 10,
  },
  itemContainer: {
    width: itemWidth,
    margin: 5,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    elevation: 3,
  },
  title: {
    fontSize: 16,
    marginBottom: 5,
  },
  imageContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: itemWidth - 20,
    height: itemWidth - 20,
    borderRadius: 5,
  },
  addToCartButton: {
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    backgroundColor: "#4CAF50",
  },
  addToCartButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default ProductsScreen;
