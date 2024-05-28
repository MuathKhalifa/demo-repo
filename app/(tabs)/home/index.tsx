import { View, Text, ScrollView, FlatList, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
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
import * as SQLite from "expo-sqlite";

const home = () => {
  const db = SQLite.openDatabase("mydb.db");
  const [isLoading, setIsLoading] = useState(true);
  const [currentName, setCurrentName] = useState<string>();
  const [names, setNames] = useState<string[]>([]);

  if (isLoading) {
    return (
      <>
        <View className="w-full h-full justify-center items-center">
          <Text>Loading...</Text>
        </View>
      </>
    );
  }

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXIST names (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)"
      );
    });

    try {
      db.transaction((tx) => {
        tx.executeSql("SELECT * FROM names", null, (txObj, resultSet) =>
          setNames(resultSet.rows._array)
        );
      });
    } catch (error) {
      console.error(error);
    }

    setIsLoading(false);
  }, []);

  return (
    <View className="w-full h-full justify-center items-center">
      <TextInput
        value={currentName}
        placeholder="name"
        onChangeText={setCurrentName}
      />
    </View>
  );

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
