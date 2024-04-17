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
        <Text style={styles.title}>{product.category}</Text>
        <Text style={styles.description}>
          Rating:{product.rating.rate}/5 
        </Text>
        <Text style={styles.description}>
        count:{product.rating.count}
        </Text>
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
  },
  price: {
    fontSize: 18,
    color: "#4CAF50",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default ProductDetailsScreen;
