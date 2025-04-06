import { View, Text, Image } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function PetInfo({ pet }) {
  return (
    <View>
      <Image
        source={{ uri: pet.imageurl }}
        style={{
          width: "100%",
          height: 300,
          objectFit: "cover",
          // borderRadius: 35,
        }}
      />
      <View
        style={{
          padding: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text
            style={{
              fontFamily: "outfit.bold",
              fontSize: 27,
            }}
          >
            {pet?.name}
          </Text>
          <Text
            style={{
              fontFamily: "outfit.medium",
              color: Colors.GRAY,
            }}
          >
            {pet?.address}
          </Text>
        </View>
        <Ionicons name="heart-outline" size={30} color="black" />
      </View>
    </View>
  );
}
