import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const ProductDetailsScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.category}>{product.category}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>Rating: {product.rating.rate}/5</Text>
          <Text style={styles.ratingText}>Count: {product.rating.count}</Text>
        </View>
        <Text style={styles.price}>Price: ${product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  category: {
    fontSize: 18,
    marginBottom: 10,
    color: "#666",
  },
  ratingContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  ratingText: {
    marginRight: 10,
    fontSize: 16,
    color: "#888",
  },
  price: {
    fontSize: 20,
    color: "#4CAF50",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    color: "#555",
  },
});

export default ProductDetailsScreen;
