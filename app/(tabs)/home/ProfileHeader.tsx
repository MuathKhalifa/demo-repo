import { View, Text, Image, SafeAreaView } from "react-native";
import React from "react";

// for the home tab
//
const ProfileHeader = () => {
  return (
    <View className="flex flex-row justify-between h-[110px] mx-2">
      <View className="flex-grow w-1/3 pl-3 pt-5">
        <Text className="text-[#2B3245] text-[24px]">Hello User!</Text>
        <Text className="text-gray-500 text-[16px]">
          We Wish you have a good day
        </Text>
      </View>
      <View className="w-5 flex-grow  items-center pt-5 ">
        <View className="h-14 w-14  overflow-hidden rounded-full object-contain ">
          <Image
            className="flex-shrink-0  object-cover w-full h-full  "
            source={require("../../../assets/images/profile.jpg")}
          />
        </View>
      </View>
    </View>
  );
};

export default ProfileHeader;
