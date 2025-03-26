import {
  View,
  FlatList,
  Image,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/FirebaseConfig";
import Colors from "./../../constants/Colors";

export default function Category() {
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Dog");

  useEffect(() => {
    GetCategories();
  }, []);

  const GetCategories = async () => {
    try {
      const snapshot = await getDocs(collection(db, "Category"));
      const categories = snapshot.docs.map((doc) => doc.data()); // Convert Firestore snapshot to array
      setCategoryList(categories); // Update state with fetched data
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Category</Text>
      <FlatList
        data={categoryList}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelectedCategory(item.name)}
            style={styles.itemContainer}
          >
            <View
              style={[
                styles.imageContainer,
                selectedCategory == item.name &&
                  styles.selectedCategoryContainer,
              ]}
            >
              <Image
                source={{ uri: item?.imageurl }}
                style={styles.categoryImage}
              />
            </View>
            <Text style={styles.categoryText}>{item?.name ?? "No Name"}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: "center",
    marginHorizontal: 9,
  },
  imageContainer: {
    backgroundColor: Colors.LIGHT_PRIMARY,
    padding: 15,
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.PRIMARY,
  },
  title: {
    fontFamily: "outfit-medium",
    fontSize: 20,
    marginBottom: 10,
  },
  categoryImage: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  categoryText: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.GRAY,
  },
  selectedCategoryContainer: {
    backgroundColor: Colors.SECONDARY,
    borderColor: Colors.SECONDARY,
  },
});
