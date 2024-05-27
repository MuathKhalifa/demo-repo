// Reformatted data structure to work with SectionList
export const AllExercises = [
  {
    title: "Hips",
    data: [
      {
        id: 11,
        name: "hips1",
        duration: 20,
        imgURL: require("../../assets/images/flexing.png"),
      },
      {
        id: 12,
        name: "hips2",
        duration: 20,
        imgURL: require("../../assets/images/flexing.png"),
      },
      {
        id: 13,
        name: "hips3",
        duration: 20,
        imgURL: require("../../assets/images/flexing.png"),
      },
      {
        id: 14,
        name: "hips4",
        duration: 20,
        imgURL: require("../../assets/images/flexing.png"),
      },
      {
        id: 15,
        name: "hips5",
        duration: 20,
        imgURL: require("../../assets/images/flexing.png"),
      },
      {
        id: 16,
        name: "hips6",
        duration: 20,
        imgURL: require("../../assets/images/flexing.png"),
      },
      {
        id: 17,
        name: "hips7",
        duration: 20,
        imgURL: require("../../assets/images/flexing.png"),
      },
    ],
  },
  {
    title: "Lower Back",
    id: 2321,
    data: [
      {
        id: 21,
        name: "lowerBack1",
        duration: 20,
        imgURL: require("../../assets/images/single.png"),
      },
      {
        id: 22,
        name: "lowerBack2",
        duration: 10,
        imgURL: require("../../assets/images/flexing.png"),
      },
      {
        id: 23,
        name: "lowerBack3",
        duration: 5,
        imgURL: require("../../assets/images/flexing.png"),
      },
      {
        id: 24,
        name: "lowerBack4",
        duration: 20,
        imgURL: require("../../assets/images/flexing.png"),
      },
      {
        id: 25,
        name: "lowerBack5",
        duration: 20,
        imgURL: require("../../assets/images/flexing.png"),
      },
      {
        id: 26,
        name: "lowerBack6",
        duration: 20,
        imgURL: require("../../assets/images/flexing.png"),
      },
    ],
  },
  {
    title: "Shoulders",
    data: [
      {
        id: 31,
        name: "sholders1",
        duration: 20,
        imgURL: require("../../assets/images/flexing.png"),
      },
      {
        id: 32,
        name: "sholders2",
        duration: 20,
        imgURL: require("../../assets/images/flexing.png"),
      },
      {
        id: 33,
        name: "sholders3",
        duration: 20,
        imgURL: require("../../assets/images/flexing.png"),
      },
    ],
  },
  {
    title: "Neck",
    data: [
      {
        id: 41,
        name: "neck1",
        duration: 20,
        imgURL: require("../../assets/images/flexing.png"),
      },
      {
        id: 42,
        name: "neck2",
        duration: 20,
        imgURL: require("../../assets/images/flexing.png"),
      },
      {
        id: 43,
        name: "neck3",
        duration: 20,
        imgURL: require("../../assets/images/flexing.png"),
      },
      {
        id: 44,
        name: "neck4",
        duration: 20,
        imgURL: require("../../assets/images/flexing.png"),
      },
      {
        id: 45,
        name: "neck5",
        duration: 20,
        imgURL: require("../../assets/images/flexing.png"),
      },
    ],
  },
  {
    title: "Hamstring",
    data: [
      {
        id: 51,
        name: "hamstring1",
        duration: 20,
        imgURL: require("../../assets/images/flexing.png"),
      },
      {
        id: 52,
        name: "hamstring2",
        duration: 20,
        imgURL: require("../../assets/images/flexing.png"),
      },
      {
        id: 53,
        name: "hamstring3",
        duration: 20,
        imgURL: require("../../assets/images/flexing.png"),
      },
    ],
  },
  {
    title: "Posture",
    data: [
      {
        id: 61,
        name: "tech Neck",
        duration: 20,
        imgURL: require("../../assets/images/flexing.png"),
      },
      {
        id: 62,
        name: "pelvicTilt",
        duration: 20,
        imgURL: require("../../assets/images/flexing.png"),
      },
      {
        id: 63,
        name: "posture3",
        duration: 20,
        imgURL: require("../../assets/images/flexing.png"),
      },
      {
        id: 64,
        name: "posture4",
        duration: 20,
        imgURL: require("../../assets/images/flexing.png"),
      },
    ],
  },
  {
    title: "Core",
    data: [
      {
        id: 71,
        name: "core1",
        duration: 20,
        imgURL: require("../../assets/images/background.jpg"),
      },
      {
        id: 72,
        name: "core2",
        duration: 20,
        imgURL: require("../../assets/images/flexing.png"),
      },
      {
        id: 73,
        name: "core3",
        duration: 20,
        imgURL: require("../../assets/images/flexing.png"),
      },
    ],
  },
];

export const excerciseCollectionByRegion = {
  lowerBack: AllExercises.find((group) => group.title === "Lower Back").data,
  neck: AllExercises.find((group) => group.title === "Neck").data,
  posture: AllExercises.find((group) => group.title === "Posture").data,
  core: AllExercises.find((group) => group.title === "Core").data,
  hamstring: AllExercises.find((group) => group.title === "Hamstring").data,
};
export const excerciseCollectionById = {
  2321: AllExercises.find((group) => group.title === "Lower Back").data,
  neck: AllExercises.find((group) => group.title === "Neck").data,
  posture: AllExercises.find((group) => group.title === "Posture").data,
  core: AllExercises.find((group) => group.title === "Core").data,
  hamstring: AllExercises.find((group) => group.title === "Hamstring").data,
};
