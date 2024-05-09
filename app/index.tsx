import { View, Text } from "react-native";
import React from "react";
import { Redirect } from "expo-router";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";

const index = () => {
  return (
    <>
      <Redirect href="/exercise/finished" />
    </>
  );
};

export default index;
