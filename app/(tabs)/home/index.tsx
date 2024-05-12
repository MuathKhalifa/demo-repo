import { View, Text, ScrollView, FlatList } from "react-native";
import React from "react";
import { Link, Redirect } from "expo-router";
import { StatusBar } from "expo-status-bar";
import ProfileHeader from "./ProfileHeader";
import Routine from "./Routine";
import Recommended from "./Recommended";
import Categories from "./Categories";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

const home = () => {
  return (
    <View className="bg-[#F8F3FF] h-full  ">
      {/* <Redirect href="bookmark/custom/2" /> */}
      <ScrollView className="">
        <SafeAreaView className="mx-0">
          <View className="flex-1  w-full z-20 ">
            <ProfileHeader />
            <Routine />
            <Recommended />
            <Categories />
          </View>
        </SafeAreaView>
      </ScrollView>

      {/* <Text className="bg-red-500 text-blue-300 border-2 ">home</Text>
      <View className="bg-red-400 flex justify-center">
      <Text>Hello</Text>
      </View>
      <StatusBar style="auto" />
      
    <Link href="/settings">Go to settings</Link> */}
    </View>
  );
};

export default home;
