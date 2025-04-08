import { View, Text, Image } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";

export default function PetSubInfo({ pet }) {
  return (
    <View
      style={{
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: Colors.WHITE,
            padding: 10,
            margin: 5,
            borderRadius: 8,
            gap: 10,
            flex: 1,
          }}
        >
          <Image
            source={require("./../../assets/images/calendar.png")}
            style={{
              width: 40,
              height: 40,
            }}
          />
          <View>
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 16,
                color: Colors.GRAY,
              }}
            >
              Age
            </Text>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 20,
              }}
            >
              {pet?.age + " Years"}
            </Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: Colors.WHITE,
            padding: 10,
            margin: 5,
            borderRadius: 8,
            gap: 10,
            flex: 1,
          }}
        >
          <Image
            source={require("./../../assets/images/bone.png")}
            style={{
              width: 40,
              height: 40,
            }}
          />
          <View
            style={{
              flex: 1,
            }}
          >
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 16,
                color: Colors.GRAY,
              }}
            >
              Breed
            </Text>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 16,
              }}
            >
              {pet?.breed}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: Colors.WHITE,
            padding: 10,
            margin: 5,
            borderRadius: 8,
            gap: 10,
            flex: 1,
          }}
        >
          <Image
            source={require("./../../assets/images/sex.png")}
            style={{
              width: 40,
              height: 40,
            }}
          />
          <View>
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 16,
                color: Colors.GRAY,
              }}
            >
              Sex
            </Text>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 20,
              }}
            >
              {pet?.sex}
            </Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: Colors.WHITE,
            padding: 10,
            margin: 5,
            borderRadius: 8,
            gap: 10,
            flex: 1,
          }}
        >
          <Image
            source={require("./../../assets/images/weight.png")}
            style={{
              width: 40,
              height: 40,
            }}
          />
          <View>
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 16,
                color: Colors.GRAY,
              }}
            >
              Weight
            </Text>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 20,
              }}
            >
              {pet?.weight + " Kg"}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
