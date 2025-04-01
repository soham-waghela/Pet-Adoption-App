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
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/FirebaseConfig";
import Colors from "./../../constants/Colors";

export default function Category() {
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Dog");
  const [petList, setPetList] = useState([]);

  useEffect(() => {
    GetCategories();
    if (selectedCategory) {
      GetPetList();
    }
  }, [selectedCategory]);

  const GetCategories = async () => {
    try {
      const snapshot = await getDocs(collection(db, "Category"));
      const categories = snapshot.docs.map((doc) => doc.data());
      setCategoryList(categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const GetPetList = async () => {
    try {
      if (!selectedCategory || typeof selectedCategory !== "string") {
        console.error("Invalid category value:", selectedCategory);
        return;
      }

      const petsRef = collection(db, "Pets");
      const categoryValue = String(selectedCategory).trim();
      const q = query(petsRef, where("Category", "==", categoryValue));

      const snapshot = await getDocs(q);
      const pets = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPetList(pets);
    } catch (error) {
      console.error("Error fetching pet list:", error);
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
      <Text style={styles.title}>Pet List</Text>
      <FlatList
        data={petList}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.petCard}>
            <Image source={{ uri: item?.imageurl }} style={styles.petImage} />
            <Text style={styles.petName}>{item?.name}</Text>
            <Text style={styles.petBreed}>{item?.breed}</Text>
            <View style={styles.ageBadge}>
              <Text style={styles.ageText}>{item?.age} YRS</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  title: {
    fontFamily: "outfit-medium",
    fontSize: 20,
    marginBottom: 10,
    marginTop: 5,
  },
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
  selectedCategoryContainer: {
    backgroundColor: Colors.SECONDARY,
    borderColor: Colors.SECONDARY,
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
  petCard: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 10,
    alignItems: "center",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    width: 150,
  },
  petImage: {
    width: 120,
    height: 120,
    borderRadius: 15,
  },
  petName: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  petBreed: {
    fontSize: 14,
    color: Colors.GRAY,
  },
  ageBadge: {
    backgroundColor: "#F5C242",
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 5,
  },
  ageText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
  },
});
