const colors = {
  transparent: "transparent",
  black: "#000000",
  white: "#FFFFFF",
  gray: "#50514F",
  grey: "#50514F",
  red: "#EB0D1B",
  yellow: [
    "#FFE973",
    "#FFE55C",
    "#FFE145",
    "#FFDE2E",
    "#FFDA17",
    "#FFD700",
    "#E8C400",
    "#D1B000",
    "#BA9D00"
  ],
  green: [
    "#61C36F",
    "#4FBC5F",
    "#3EB650",
    "#39A649",
    "#339542",
    "#2E853B",
    "#287433",
    "#22642C",
    "#1D5325"
  ],
  blue: [
    "#359BFB",
    "#49A5FB",
    "#2191FB",
    "#1E84E5",
    "#1C77CE",
    "#196AB7",
    "#155DA0",
    "#125089",
    "#0F4273"
  ],
  navy: "#001f3f",
  aqua: "#7FDBFF",
  teal: "#39CCCC",
  olive: "#3D9970",
  maroon: "#85144b",
  fuchsia: "#F012BE",
  purple: {
    1: "#e988f7",
    2: "#e679f6",
    3: "#e369f5",
    4: "#e059f4",
    5: "#dd49f3",
    6: "#db39f2",
    7: "#d829f1",
    8: "#d519f0",
    9: "#cd0fe9",
    10: "#bf0ed9",
    11: "#b10dc9",
    12: "#a30cb9",
    13: "#950ba9",
    14: "#870a99",
    15: "#790989",
    16: "#790989",
    17: "#6b0879",
    18: "#5d0769",
    19: "#4f0659",
    20: "#410549"
  },
  silver: "#DDDDDD"
};

const alerts = {
  success: {
    color: "#FFFFFF",
    backgroundColor: "#70C1B3"
  },
  error: {
    color: "#FFFFFF",
    backgroundColor: "#F25F5C"
  },
  warning: {
    color: "#000000",
    backgroundColor: "#FFE066"
  },
  custom: ""
};

const breakpoints = ["576px", "768px", "992px", "1200px"];

const fontSizes = [
  "0.5rem",
  "1rem",
  "1.5rem",
  "2rem",
  "2.5rem",
  "3rem",
  "3.5rem",
  "4rem",
  "4.5rem",
  "5rem"
];

export default {
  colors,
  fontSizes,
  breakpoints,
  alerts
};
