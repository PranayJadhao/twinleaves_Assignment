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
  ActivityIndicator,
} from "react-native";

const windowWidth = Dimensions.get("window").width;

const ProductsScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

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
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        setLoading(false);
      });
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    Alert.alert("Product Added", `${item.title} added to cart.`);
  };

  const handleProductPress = (item) => {
    navigation.navigate("ProductDetails", { product: item });
  };

  const renderItem = ({ item }) => (
    <Pressable onPress={() => handleProductPress(item)}>
      <View style={styles.itemContainer}>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <Pressable
          style={styles.addToCartButton}
          onPress={() => addToCart(item)}
        >
          <Text style={styles.addToCartButtonText}>Add to Cart</Text>
        </Pressable>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#4CAF50" />
          <Text>Loading...</Text>
        </View>
      ) : (
        <FlatList
          data={products}
          numColumns={2}
          keyExtractor={(item, index) => `${item.id}_${index}`}
          renderItem={renderItem}
          contentContainerStyle={styles.flatlistContent}
        />
      )}
    </View>
  );
};

const itemWidth = (windowWidth - 20) / 2;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  flatlistContent: {
    paddingBottom: 10,
  },
  itemContainer: {
    width: itemWidth,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    margin: 5,
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  price: {
    fontSize: 14,
    color: "#888",
    marginBottom: 5,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  addToCartButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 5,
    paddingVertical: 8,
    alignItems: "center",
    marginTop: 5,
  },
  addToCartButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ProductsScreen;
