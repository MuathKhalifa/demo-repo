export const AllExercises = {
  hips: {
    hips1: {
      imgURL: require("../../assets/images/flexing.png"),
      name: "hips1",
      duration: 20,
    },

    hips2: {
      imgURL: require("../../assets/images/flexing.png"),
      name: "hips2",
      duration: 20,
    },
    hips3: {
      imgURL: require("../../assets/images/flexing.png"),
      name: "hips3",
      duration: 20,
    },

    hips4: {
      imgURL: require("../../assets/images/flexing.png"),
      name: "hips4",
      duration: 20,
    },
    hips5: {
      imgURL: require("../../assets/images/flexing.png"),
      name: "hips5",
      duration: 20,
    },
    hips6: {
      imgURL: require("../../assets/images/flexing.png"),
      name: "hips6",
      duration: 20,
    },
    hips7: {
      imgURL: require("../../assets/images/flexing.png"),
      name: "hips7",
      duration: 20,
    },
  },
  //lower back
  lowerBack: {
    lowerBack1: {
      imgURL: require("../../assets/images/single.png"),
      name: "lowerBack1",
      duration: 20,
    },
    lowerBack2: {
      imgURL: require("../../assets/images/flexing.png"),
      name: "lowerBack2",
      duration: 10,
    },
    lowerBack3: {
      imgURL: require("../../assets/images/flexing.png"),
      name: "lowerBack3",
      duration: 5,
    },
    lowerBack4: {
      imgURL: require("../../assets/images/flexing.png"),
      name: "lowerBack4",
      duration: 20,
    },
    lowerBack5: {
      imgURL: require("../../assets/images/flexing.png"),
      name: "lowerBack5",
      duration: 20,
    },
    lowerBack6: {
      imgURL: require("../../assets/images/flexing.png"),
      name: "lowerBack6",
      duration: 20,
    },
  },

  //shoulders
  shoulders: {
    sholders1: {
      imgURL: require("../../assets/images/flexing.png"),
      name: "sholders1",
      duration: 20,
    },
    sholders2: {
      imgURL: require("../../assets/images/flexing.png"),
      name: "sholders2",
      duration: 20,
    },
    sholders3: {
      imgURL: require("../../assets/images/flexing.png"),
      name: "sholders3",
      duration: 20,
    },
  },
  neck: {
    neck1: {
      imgURL: require("../../assets/images/flexing.png"),
      name: "neck1",
      duration: 20,
    },
    neck2: {
      imgURL: require("../../assets/images/flexing.png"),
      name: "neck2",
      duration: 20,
    },
    neck3: {
      imgURL: require("../../assets/images/flexing.png"),
      name: "neck3",
      duration: 20,
    },
    neck4: {
      imgURL: require("../../assets/images/flexing.png"),
      name: "neck4",
      duration: 20,
    },
    neck5: {
      imgURL: require("../../assets/images/flexing.png"),
      name: "neck5",
      duration: 20,
    },
  },
  //hamstring
  hamstring: {
    hamstring1: {
      imgURL: require("../../assets/images/flexing.png"),
      name: "hamstring1",
      duration: 20,
    },
    hamstring2: {
      imgURL: require("../../assets/images/flexing.png"),
      name: "hamstring2",
      duration: 20,
    },
    hamstring3: {
      imgURL: require("../../assets/images/flexing.png"),
      name: "hamstring3",
      duration: 20,
    },
  },

  //posture
  posture: {
    techNeck: {
      imgURL: require("../../assets/images/flexing.png"),
      name: "tech Neck",
      duration: 20,
    },
    pelvicTilt: {
      imgURL: require("../../assets/images/flexing.png"),
      name: "pelvicTilt",
      duration: 20,
    },
    posture3: {
      imgURL: require("../../assets/images/flexing.png"),
      name: "posture3",
      duration: 20,
    },
    posture4: {
      imgURL: require("../../assets/images/flexing.png"),
      name: "posture4",
      duration: 20,
    },
  },

  //core
  core: {
    core1: {
      imgURL: require("../../assets/images/background.jpg"),
      name: "core1",
      duration: 20,
    },
    core2: {
      imgURL: require("../../assets/images/flexing.png"),
      name: "core2",
      duration: 20,
    },
    core3: {
      imgURL: require("../../assets/images/flexing.png"),
      name: "core3",
      duration: 20,
    },
  },
};

export const excerciseCollectionByRegion = {
  lowerBack: [
    AllExercises.lowerBack.lowerBack1,
    AllExercises.lowerBack.lowerBack2,
    AllExercises.lowerBack.lowerBack3,
    AllExercises.lowerBack.lowerBack4,
    AllExercises.lowerBack.lowerBack5,
    AllExercises.lowerBack.lowerBack6,
  ],
  neck: [
    AllExercises.neck.neck1,
    AllExercises.neck.neck2,
    AllExercises.neck.neck3,
    AllExercises.neck.neck4,
    AllExercises.neck.neck5,
  ],
  posture: [
    AllExercises.posture.techNeck,
    AllExercises.posture.pelvicTilt,
    AllExercises.posture.posture3,
    AllExercises.posture.posture4,
  ],
  core: [
    AllExercises.core.core1,
    AllExercises.core.core2,
    AllExercises.core.core3,
  ],
  hamstring: [
    AllExercises.hamstring.hamstring1,
    AllExercises.hamstring.hamstring2,
    AllExercises.hamstring.hamstring3,
  ],
};
