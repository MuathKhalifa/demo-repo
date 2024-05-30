import { View, Text, Platform } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Header } from "react-native/Libraries/NewAppScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
type iconNameType =
  | "home"
  | "home-outline"
  | "person"
  | "person-outline"
  | "bookmark"
  | "bookmark-outline"
  | "stats-chart"
  | "stats-chart-outline";

const TabsLayout = () => {
  console.log("tabszz: ");
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,

        tabBarStyle: {
          height: Platform.OS == "android" ? 60 : 70,
          // borderRadius: 10,
          borderTopEndRadius: 10,
          borderTopLeftRadius: 10,
          borderTopColor: "yellow",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: Platform.OS == "android" ? 0 : 10,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarShowLabel: false,

          tabBarIcon: ({ color, size, focused }) => {
            let iconName: iconNameType = focused ? "home" : "home-outline";

            return (
              <>
                <AntDesign name="github" size={24} color="black" />
                <Text>Hello</Text>
              </>
            );
          },
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            const iconsName: iconNameType = focused
              ? "bookmark"
              : "bookmark-outline";
            return (
              <>
                <Ionicons name={iconsName} size={size} color={"#7F63FB"} />
              </>
            );
          },
        }}
      />

      <Tabs.Screen
        name="stats"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            const iconsName: iconNameType = focused
              ? "stats-chart"
              : "stats-chart-outline";
            return (
              <>
                <Ionicons name={iconsName} size={size} color={"#7F63FB"} />
              </>
            );
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            const iconsName: iconNameType = focused
              ? "person"
              : "person-outline";
            return (
              <>
                <Ionicons name={iconsName} size={size} color={"#7F63FB"} />
              </>
            );
          },
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
