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
import { AllExercises } from "../../../assets/data/excerciseCollectionByRegion";
import { G } from "react-native-svg";
const home = () => {
  const [isLoading, setIsLoading] = useState(false);
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
    const opendb = async () => {
      console.log("herexxx:");
      let db: SQLite.SQLiteDatabase;
      try {
        db = await SQLite.openDatabaseAsync("excercises");

        await db.execAsync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS regions (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL UNIQUE);
        CREATE TABLE IF NOT EXISTS version (version INTEGER NOT NULL UNIQUE);

        
        `);
        await db.execAsync(`
        CREATE TABLE IF NOT EXISTS exercises (
          id INTEGER PRIMARY KEY NOT NULL, 
          regionId INTEGER NOT NULL,
          name TEXT NOT NULL,
          duration INTEGER NOT NULL,
          imgURL TEXT NOT NULL,
          FOREIGN KEY (regionId) REFERENCES regions(id)
          );
          `);

        await insertData(db);

        // const del = await db.runAsync("delete FROM exercises");
        // const del = await db.runAsync("delete FROM version");

        const allRows = await db.getAllAsync("SELECT * FROM exercises");

        // console.log("all: ", allRows);
        // for (const row of allRows) {
        //   console.log(row);
        // }
      } catch (error) {
        console.error(error);
      }
    };

    const insertData = async (db: SQLite.SQLiteDatabase) => {
      try {
        const version: any = await db.getAllAsync(`SELECT * FROM version`);

        if (version[0].version >= 1) {
          return;
        }
        await db.execAsync("INSERT  INTO version (version) VALUES(1)");

        return;
        AllExercises.forEach((exerciseGroup) => {
          exerciseGroup.data.forEach(async (exercise) => {
            try {
              const back = await db.runAsync(
                `
                INSERT OR IGNORE INTO regions (title) VALUES (?)
              `,
                exerciseGroup.title
              );
              console.log("back: ", back);
            } catch (error) {
              console.error(error);
            }

            try {
              const res = await db.runAsync(
                `INSERT INTO exercises (regionId, name, duration, imgURL)
                   VALUES (
                     ?,
                     ?, 
                     ?, 
                     ?
                   )`,
                [
                  exerciseGroup.title,
                  exercise.name,
                  exercise.duration,
                  exercise.imgURL,
                ]
              );
            } catch (error) {
              console.error(error);
            }
          });
        });
      } catch (error) {
        console.log("errrrrrrrrrrrrrrx");
        console.error(error);
      }
    };

    opendb();
  }, []);

  // useEffect(() => {
  //   db.transaction((tx) => {
  //     tx.executeSql(
  //       "CREATE TABLE IF NOT EXIST names (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)"
  //     );
  //   });

  //   try {
  //     db.transaction((tx) => {
  //       tx.executeSql("SELECT * FROM names", null, (txObj, resultSet) =>
  //         setNames(resultSet.rows._array)
  //       );
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }

  //   setIsLoading(false);
  // }, []);

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
