import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import React, { useEffect } from "react";
import { Button, Card } from "@ui-kitten/components";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SingleCategory from "../home/CategoriesContainer/SingleCategory";

const Footer = (): React.ReactElement => (
  <View
    // eslint-disable-next-line react/prop-types
    className="border"
  >
    <Button size="small" status="basic">
      CANCEL
    </Button>
    <Button size="small">ACCEPT</Button>
  </View>
);

const BookMark = () => {
  // useEffect(() => {
  //   const getList = async () => {
  //     const excercise = await AsyncStorage.getItem("customE");

  //     console.log("excerciseL: ", excercise);
  //   };

  //   getList();
  // }, []);
  return (
    <SafeAreaView className=" h-full bg-white   ">
      <TouchableOpacity
        onPress={() => {
          console.log("whole");
          router.navigate("/bookmark/custom");
        }}
        className=" border-gray-300  h-40   mt-28 mx-4 rounded-3xl relative border-2"
      >
        <View className="items-center top-5">
          <Ionicons
            className=""
            name="create-outline"
            size={50}
            color="black"
          />
        </View>
        <View className="absolute bottom-2 items-center w-full z-40">
          <Text className="text-lg font-bold text-center">
            Create Your Own Routine
          </Text>
          <Text className="text-center text-gray-600 text-[15px]">
            Tap
            <MaterialCommunityIcons
              name="gesture-double-tap"
              size={16}
              color="black"
            />
          </Text>
        </View>
      </TouchableOpacity>

      {/* custom List */}
      <View className="mx-4 mt-10">
        <SingleCategory
          imgURL={require("../../../assets/images/man-stretching.jpg")}
          height={125}
        />
      </View>
      {/* <TouchableOpacity
        onPress={() => {
          console.log("whole");
          const id = { id: 2 };

          router.navigate({ pathname: `/exercise`, params: { id: 2 } }); // Remove the braces in params
        }}
        className="border-black  h-40   mt-28 mx-4 rounded-3xl  border p-3 relative"
      >
        <Image
          className="flex-shrink-0 w-1/2 h-full"
          source={require("../../../assets/images/man-stretching.jpg")}
        />
        <Text className="absolute bottom-2  text-lg  right-20">Custom One</Text>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
};

export default BookMark;
