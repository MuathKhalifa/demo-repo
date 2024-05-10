import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const CustomLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          // headerTitle: "Custom",
          presentation: "modal",
        }}
      />
    </Stack>
  );
};

export default CustomLayout;
