import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";

type SingleExerciseType = {
  item: any;
  increaseTime?: (name: string) => void;
  decreaseTime?: (name: string) => void;
  custom?: boolean;
  customList?: String[];
  setCustomList?: (state: any) => void;
  showToast: () => void;
};

function ExcerciseControls({ decreaseTime, increaseTime, name }) {
  return (
    <View className=" flex-row mr-2 gap-x-5 h-10">
      <EvilIcons
        onPress={() => {
          decreaseTime(name);
        }}
        name="minus"
        size={36}
        color="gray"
      />
      <EvilIcons
        onPress={() => {
          increaseTime(name);
        }}
        name="plus"
        size={36}
        color="gray"
      />
    </View>
  );
}

function CustomExcerciseControls({
  setCustomList,
  customList,
  item,
  showToast,
}) {
  function addExerciseToCustomList() {
    const tempArr = customList;

    console.log("item: ", item);
    setCustomList((prevItems) => [...prevItems, item]);
  }
  return (
    <View className=" flex-row mr-2 gap-x-5 h-10">
      <TouchableOpacity
        onPress={() => {
          addExerciseToCustomList();
          showToast();
        }}
        activeOpacity={0.8}
      >
        <EvilIcons name="plus" size={36} color="green" />
      </TouchableOpacity>
    </View>
  );
}
const SingleExercise = ({
  item,
  increaseTime,
  decreaseTime,
  custom,
  customList,
  setCustomList,
  showToast,
}: SingleExerciseType) => {
  const { imgURL, name, duration } = item;
  return (
    <View className=" bg-white   flex flex-row h-20 justify-between items-center border  border-gray-100 rounded-lg ">
      <View className="h-16  w-20 border border-gray-100 rounded-lg">
        <Image source={item.imgURL} className="w-full h-full" />
      </View>
      <View className="flex-col gap-1 pl-2 right-12">
        <Text>{item.name}</Text>

        <Text className="text-gray-400">{item.duration} minutes</Text>
      </View>
      {!custom ? (
        <ExcerciseControls
          decreaseTime={decreaseTime}
          increaseTime={increaseTime}
          name={item.name}
        />
      ) : (
        <CustomExcerciseControls
          setCustomList={setCustomList}
          customList={customList}
          item={item}
          showToast={showToast}
        />
      )}
    </View>
  );
};

export default SingleExercise;
