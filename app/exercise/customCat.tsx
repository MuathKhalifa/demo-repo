// import { View, Text, SafeAreaView, FlatList } from 'react-native'
// import React, { useState } from 'react'
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const customCat = () => {

//     const [data, setData] = useState();

//     async function getCustomList() {
//         try {
//           let list: any = await AsyncStorage.getItem("customE");
//           list = JSON.parse(list);

//           setData(list);
//         } catch (error) {}
//       }

//   return (
//     <View className=" bg-white h-full pl-2 pt-2">
//     <View className=" mb-2">
//       <Text className="text-[20px]">Category name</Text>
//       <Text className="text-gray-500">
//         Lower back excercise is importing for daily activities such as bending
//       </Text>
//     </View>
//     <View className="bg-white self-start flex-row">
//       <View className="flex-row w-32  items-center justify-center px-2 py-2 rounded-md bg-[#DCF1FE]">
//         <Text className="right-3">
//           <AntDesign name="clockcircleo" size={14} color="#12BEF6" />
//         </Text>
//         <Text className="text-[#12BEF6]  ">{totaltime} mins</Text>
//       </View>
//       <View className="flex-row w-32  items-center justify-center px-2 py-2 rounded-md ml-2 bg-[#F8E1D2] ">
//         <Text className="right-3">
//           <FontAwesome6 name="person-praying" size={14} color="#F77D39" />
//         </Text>
//         <Text className="text-[#F77D39]  ">
//           {exerciseRegion == "lowerBack" ? "Lower back" : exerciseRegion}
//         </Text>
//       </View>
//     </View>
//     <View className="border-2 flex-1 border-yellow-50 ">
//       <Text className="font-bold text-[16px] mt-2">Stretches</Text>
//       <View className="flex-1 ">
//         <SafeAreaView className="flex-1 ">
//           <FlatList
//             data={data}
//             className="  "
//             style={{ paddingBottom: 10 }}
//             showsHorizontalScrollIndicator={false}
//             showsVerticalScrollIndicator={false}
//             ListFooterComponent={() => (
//               <StartExerciseButton exerciseList={Data[exerciseRegion]} />
//             )}
//             contentContainerStyle={{ paddingBottom: 10 }}
//             renderItem={({ item }) => (
//               <>
//                 <SingleExercise
//                   item={item}
//                   increaseTime={increaseTime}
//                   decreaseTime={decreaseTime}
//                 />
//               </>
//             )}
//           ></FlatList>
//         </SafeAreaView>
//       </View>
//     </View>
//   </View>
//   )
// }

// export default customCat
