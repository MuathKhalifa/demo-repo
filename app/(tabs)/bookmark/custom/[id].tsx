import {
  View,
  Text,
  SafeAreaView,
  SectionList,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import SingleExercise from "../../../exercise/SingleExercise";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SingleCategory from "../../home/CategoriesContainer/SingleCategory";

type customList = {
  duration: number;
  id: number;
  imgURL: any;
  name: string;
};
const customList = () => {
  const [customList, setCustomList] = useState<customList[]>();

  useEffect(() => {
    const getList = async () => {
      let list: any = await AsyncStorage.getItem("customE");
      list = JSON.parse(list);

      setCustomList(list);
    };
    getList();
  }, []);

  console.log("mycuom: ", customList);
  return (
    <SafeAreaView className="bg-white top-8">
      <FlatList
        data={customList}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <>
            <SingleExercise
              item={item}
              custom={false}
              setCustomList={setCustomList}
            />
          </>
        )}
      />
    </SafeAreaView>
  );
};

export default customList;
