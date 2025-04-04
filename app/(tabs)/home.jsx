import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Header from "../../Components/Home/Header";
import Slider from "../../Components/Home/Slider";
import Category from "../../Components/Home/Category";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Colors from "../../constants/Colors";

export default function Home() {
  return (
    <ScrollView
      style={{ padding: 20 }}
      contentContainerStyle={{ paddingBottom: 30 }}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <Header />

      {/* Slider */}
      <Slider />

      {/* Category + List of pets */}
      <Category />

      {/* Add new pet option */}
      <TouchableOpacity style={styles.addNewPet}>
        <MaterialIcons name="pets" size={24} color={Colors.PRIMARY} />
        <Text
          style={{
            fontFamily: "outfit-medium",
            color: Colors.PRIMARY,
            fontSize: 20,
          }}
        >
          Add New Pet
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  addNewPet: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    padding: 20,
    marginTop: 20,
    backgroundColor: Colors.LIGHT_PRIMARY,
    borderWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.PRIMARY,
    borderRadius: 15,
    borderStyle: "dashed",
    justifyContent: "center",
  },
});
