import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import Colors from "../../constants/Colors";
import { Picker } from "@react-native-picker/picker";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/FirebaseConfig";
import * as ImagePicker from "expo-image-picker";

export default function AddNewPet() {
  const navigation = useNavigation();
  const [formData, setFormData] = useState();
  const [gender, setGender] = useState();
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Add New Pet",
    });
    GetCategories();
  }, []);
  const GetCategories = async () => {
    try {
      const snapshot = await getDocs(collection(db, "Category"));
      const categories = snapshot.docs.map((doc) => doc.data());
      setCategoryList(categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  //  used to pick image from gallery
  const imagePicker = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleInputChange = (fieldName, fieldValue) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));
  };
  const onSubmit = () => {
    console.log(formData);
  };
  return (
    <ScrollView
      style={{
        padding: 20,
      }}
    >
      <Text
        style={{
          fontFamily: "outfit.medium",
          fontSize: 20,
        }}
      >
        Add New Pet for Adoption
      </Text>
      <Pressable onPress={imagePicker}>
        {!image ? (
          <Image
            source={require("./../../assets/images/image.png")}
            style={{
              width: 100,
              height: 100,

              borderRadius: 15,
              borderWidth: 1,
              borderColor: Colors.GRAY,
            }}
          />
        ) : (
          <Image
            source={{ uri: image }}
            style={{
              width: 100,
              height: 100,

              borderRadius: 15,
              borderWidth: 1,
              borderColor: Colors.GRAY,
            }}
          />
        )}
      </Pressable>
      {/* Name */}
      <View style={styles.inputContainer}>
        <Text style={styles.lable}>Pet Name*</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => handleInputChange("name", value)}
        />
      </View>
      {/* Category */}
      <View style={styles.inputContainer}>
        <Text style={styles.lable}> Pet Category*</Text>
        <Picker
          selectedValue={selectedCategory}
          style={styles.input}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedCategory(itemValue);
            handleInputChange("Category", itemValue);
          }}
        >
          {categoryList.map((category, index) => (
            <Picker.Item
              key={index}
              label={category.name}
              value={category.name}
            />
          ))}
        </Picker>
      </View>
      {/* Breed */}
      <View style={styles.inputContainer}>
        <Text style={styles.lable}>Breed*</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => handleInputChange("breed", value)}
        />
      </View>
      {/* Age */}
      <View style={styles.inputContainer}>
        <Text style={styles.lable}>Age*</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => handleInputChange("age", value)}
        />
      </View>
      {/* Gender */}
      <View style={styles.inputContainer}>
        <Text style={styles.lable}>Gender*</Text>
        <Picker
          selectedValue={gender}
          style={styles.input}
          onValueChange={(itemValue, itemIndex) => {
            setGender(itemValue);
            handleInputChange("sex", itemValue);
          }}
        >
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
        </Picker>
      </View>
      {/* Weight */}
      <View style={styles.inputContainer}>
        <Text style={styles.lable}>Weight*</Text>

        <TextInput
          style={styles.input}
          onChangeText={(value) => handleInputChange("weight", value)}
        />
      </View>
      {/* Address */}
      <View style={styles.inputContainer}>
        <Text style={styles.lable}>Address*</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => handleInputChange("address", value)}
        />
      </View>
      {/* About */}
      <View style={styles.inputContainer}>
        <Text style={styles.lable}>About*</Text>
        <TextInput
          style={styles.input}
          numberOfLines={5}
          multiline={true}
          onChangeText={(value) => handleInputChange("description", value)}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text
          style={{
            fontFamily: "outfit.medium",
            textAlign: "center",
          }}
        >
          Submit
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 5,
  },
  input: {
    padding: 10,
    backgroundColor: Colors.WHITE,
    borderRadius: 7,
    fontFamily: "outfit",
  },
  lable: {
    marginVertical: 5,
    fontFamily: "outfit",
  },
  button: {
    marginVertical: 10,
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 9,
    marginBottom: 50,
  },
});
