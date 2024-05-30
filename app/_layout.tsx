import { View, Text } from "react-native";
import React from "react";
import * as eva from "@eva-design/eva";
import {
  Redirect,
  Stack,
  Tabs,
  router,
  useLocalSearchParams,
  useNavigation,
} from "expo-router";
import Toast from "react-native-toast-message";

const RootLayout = () => {
  const params = useLocalSearchParams();
  const navigation = useNavigation();
  console.log("here", navigation.getId);

  // router.navigate("/home");

  return (
    <>
      <Toast />

      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="exercise"
          options={{
            presentation: "modal",
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
};

export default RootLayout;
