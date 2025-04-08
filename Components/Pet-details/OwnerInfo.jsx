import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function OwnerInfo({ pet }) {
  return (
    <View style={styles.container}>
      {/* LEFT SIDE: Avatar + Text */}
      <View style={styles.leftSection}>
        <Image source={{ uri: pet?.userimage }} style={styles.avatar} />
        <View style={styles.textContainer}>
          <Text style={styles.username}>{pet?.username}</Text>
          <Text style={styles.subText}>Pet Owner</Text>
        </View>
      </View>

      {/* RIGHT SIDE: Icon */}
      <Ionicons name="send-sharp" size={24} color={Colors.PRIMARY} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    marginHorizontal: 20,
    borderRadius: 15,
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 99,
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "center",
  },
  username: {
    fontFamily: "outfit-medium",
    fontSize: 17,
  },
  subText: {
    fontFamily: "outfit",
    color: Colors.GRAY,
  },
});
