import { View, Text } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";

const bookMarkLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="custom"
        options={{
          headerShown: false,
          // headerTitle: "dd",
          // presentation: "fullScreenModal",
        }}
      />
    </Stack>
  );
};

export default bookMarkLayout;
