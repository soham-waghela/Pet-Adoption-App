import { View, Text } from "react-native";
import React from "react";
import Header from "../../Components/Home/Header";
import Slider from "../../Components/Home/Slider";
import Category from "../../Components/Home/Category";

export default function Home() {
  return (
    <View
      style={{
        padding: 20,
        // marginTop: ,
      }}
    >
      {/* Header */}

      <Header />

      {/* Slider */}

      <Slider />

      {/* Category + List of pets */}

      <Category />

      {/* Add new pet option */}
    </View>
  );
}
