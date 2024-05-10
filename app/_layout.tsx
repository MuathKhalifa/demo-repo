import { View, Text } from "react-native";
import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
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

      <ApplicationProvider {...eva} theme={eva.light}>
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
      </ApplicationProvider>
    </>
  );
};

export default RootLayout;
