import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";

const Finished = () => {
  return (
    <View className="bg-[#3E9CAD] h-full">
      <View className="border-2 h-full flex items-center justify-center">
        <MaterialIcons name="sports-martial-arts" size={70} color="white" />
        <Text className="text-white text-[60px] mb-5">Congrats</Text>
        <Text className="text-gray-200 text-lg">You Managed It</Text>
        <TouchableOpacity
          onPress={() => router.navigate("/home")}
          className="border px-16 py-4 bg-white border-white mt-10 top-20 rounded-lg"
        >
          <Text>Complete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Finished;
