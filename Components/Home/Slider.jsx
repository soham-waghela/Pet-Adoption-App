import { View, FlatList, Image, StyleSheet, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/FirebaseConfig"; // Ensure correct path to your Firebase config

export default function Slider() {
  const [sliderList, setSliderList] = useState([]);

  useEffect(() => {
    GetSliders();
  }, []);

  const GetSliders = async () => {
    try {
      const snapshot = await getDocs(collection(db, "Sliders"));
      const sliders = snapshot.docs.map((doc) => doc.data()); // Convert Firestore snapshot to array
      setSliderList(sliders); // Update state with fetched data
    } catch (error) {
      console.error("Error fetching sliders:", error);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={sliderList}
        keyExtractor={(item, index) => index.toString()} // Ensures unique keys
        horizontal // Enables horizontal scrolling
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: item?.imageurl }} // Ensure correct field name
              style={styles.sliderImage}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 0,
  },
  imageContainer: {
    marginHorizontal: 10,
  },
  sliderImage: {
    width: Dimensions.get("screen").width * 0.9,
    height: 160,
    borderRadius: 15,
  },
});
