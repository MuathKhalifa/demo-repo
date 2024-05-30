import { View, Text, ScrollView, FlatList, TextInput } from "react-native";
import React, { useEffect, useState, version } from "react";
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
          CREATE TABLE IF NOT EXISTS regions (
            id INTEGER PRIMARY KEY NOT NULL,
            title TEXT NOT NULL UNIQUE
          );
          CREATE TABLE IF NOT EXISTS exercises (
            id INTEGER PRIMARY KEY NOT NULL, 
            regionId INTEGER NOT NULL,
            name TEXT NOT NULL,
            duration INTEGER NOT NULL,
            imgURL TEXT NOT NULL,
            FOREIGN KEY (regionId) REFERENCES regions(id)
          );
          CREATE TABLE IF NOT EXISTS version (
            version INTEGER NOT NULL UNIQUE
          );
        `);

        // await checkAndInitializeDatabase(db);

        // const del = await db.runAsync("delete FROM exercises");
        // const delx = await db.runAsync("delete FROM version");
        // const delc = await db.runAsync("delete FROM regions");

        const allRows = await db.getAllAsync("SELECT * FROM exercises");
        const verions = await db.getAllAsync("SELECT * FROM version");
        // console.log("version: ", verions);
        // console.log("all: ", allRows);
        for (const row of allRows) {
          console.log(row);
        }
      } catch (error) {
        console.error(error);
      }
    };

    opendb();
  }, []);

  const checkAndInitializeDatabase = async (db: SQLite.SQLiteDatabase) => {
    try {
      const versionResult: { version: number } = await db.getFirstAsync(
        `SELECT version FROM version`
      );

      const regionId = await db.getAllAsync(`SELECT * FROM regions`);

      // console.log("regionId: ", regionId);

      let currentVersion = 0;
      if (versionResult) {
        currentVersion = versionResult.version;
      } else {
        await db.runAsync(`INSERT INTO version (version) VALUES (0)`);
      }

      const CURRENT_VERSION = 1;

      if (currentVersion < CURRENT_VERSION) {
        await insertIntialData(db);
        await db.runAsync(`UPDATE version SET version = ?`, [CURRENT_VERSION]);
      }
    } catch (error) {
      console.error("Error checking or initializing database: ", error);
    }
  };

  async function insertIntialData(db: SQLite.SQLiteDatabase) {
    AllExercises.forEach((exerciseGroup) => {
      exerciseGroup.data.forEach(async (exercise) => {
        try {
          const regionInsertResult = await db.runAsync(
            `
            INSERT OR IGNORE INTO regions (title) VALUES (?)
          `,
            exerciseGroup.title
          );

          const { id: regionId }: { id: number } = await db.getFirstAsync(
            `SELECT id FROM regions WHERE title = ?`,
            [exerciseGroup.title]
          );

          console.log("regionId: ", regionId);
          const res = await db.runAsync(
            `INSERT INTO exercises (regionId, name, duration, imgURL)
               VALUES (
                 ?,
                 ?, 
                 ?, 
                 ?
               )`,
            [regionId, exercise.name, exercise.duration, exercise.imgURL]
          );

          // console.log("back: ", regionInsertResult);
        } catch (error) {
          console.error(error);
        }
      });
    });
  }

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
