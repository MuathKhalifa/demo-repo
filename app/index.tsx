import { View, Text } from "react-native";
import React from "react";
import { Redirect, router } from "expo-router";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";

const index = () => {
  return (
    <>
      <Redirect href="/bookmark/custom" />
    </>
  );
};

export default index;
