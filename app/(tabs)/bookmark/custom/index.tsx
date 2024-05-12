import React, { useState } from "react";
import {
  View,
  Text,
  SectionList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { AllExercises } from "../../../../assets/data/excerciseCollectionByRegion";
import SingleExercise from "../../../exercise/SingleExercise";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Index = () => {
  const [customList, setCustomList] = useState([]);

  const showToast = () => {
    Toast.show({
      visibilityTime: 500,
      type: "success",
      text1: "Great!",
      text2: "Exercise Added 👋",
      text1Style: { fontSize: 16 },
      text2Style: { fontSize: 13 },
    });
  };

  async function createCustomExercise() {
    // try {
    //   const item = await AsyncStorage.setItem(
    //     "customE",
    //     JSON.stringify(customList)
    //   );
    //   console.log("item: ", item);
    // } catch (error) {
    //   console.error(error);
    // }
  }
  console.log("custom: ", customList);

  return (
    <SafeAreaView className="bg-white top-8">
      <SectionList
        className="mb-10"
        sections={AllExercises}
        renderSectionHeader={({ section }) => (
          <Text className="h-10 text-lg font-bold text-center pt-2">
            {section.title}
          </Text>
        )}
        renderItem={({ item, index }) => (
          <SingleExercise
            item={item}
            custom={true}
            customList={customList}
            setCustomList={setCustomList}
            showToast={showToast}
          />
        )}
        ListFooterComponent={() => (
          <TouchableOpacity
            onPress={createCustomExercise}
            className="w-60 mx-auto py-3 border border-blue-500 my-2 flex items-center justify-center rounded-md"
          >
            <Text className="text-blue-500 text-md">Create</Text>
          </TouchableOpacity>
        )}
      />
      <Toast />
    </SafeAreaView>
  );
};

export default Index;
