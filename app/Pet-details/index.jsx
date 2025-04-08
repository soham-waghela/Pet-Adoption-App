import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import PetInfo from "../../Components/Pet-details/PetInfo";
import PetSubInfo from "../../Components/Pet-details/PetSubInfo";
import AboutPet from "../../Components/Pet-details/AboutPet";
import OwnerInfo from "../../Components/Pet-details/OwnerInfo";
import Colors from "../../constants/Colors";

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
      <ScrollView>
        {/* PET INFO */}
        <PetInfo pet={pet} />
        {/* PET SUB INFO */}
        <PetSubInfo pet={pet} />
        {/* ABOUT */}
        <AboutPet pet={pet} />
        {/* OWNER DETAILS */}
        <OwnerInfo pet={pet} />
        <View style={{ height: 70 }}></View>
      </ScrollView>
      {/* ADOPT ME BUTTON*/}
      <View style={styles.adoptbtn}>
        <TouchableOpacity style={styles.bottomcontainer}>
          <Text style={styles.adoptText}>Adopt Me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  adoptbtn: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: Colors.PRIMARY,
  },
  bottomcontainer: {
    width: "100%",
    height: 25,
  },
  adoptText: {
    fontFamily: "outfit-medium",
    textAlign: "center",
    fontSize: 20,
    color: "white",
  },
});
