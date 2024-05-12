import { View, Text } from "react-native";
import React from "react";
import { Redirect, router } from "expo-router";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import Toast from "react-native-toast-message";

const index = () => {
  return (
    <>
      <Redirect href="/home" />
    </>
  );
};

export default index;
