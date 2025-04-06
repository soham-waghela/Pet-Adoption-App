import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import PetInfo from "../../Components/Pet-details/PetInfo";
import PetSubInfo from "../../Components/Pet-details/PetSubInfo";

export default function PetDetails() {
  const pet = useLocalSearchParams();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);
  return (
    <View>
      {/* PET INFO */}
      <PetInfo pet={pet} />

      {/* PET SUB INFO */}
      <PetSubInfo pet={pet} />
      {/* ABOUT */}
      {/* OWNER DETAILS */}
      {/* ABOUT ME */}
    </View>
  );
}
