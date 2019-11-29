const colors = {
  transparent: "transparent",
  black: "#000000",
  white: "#FFFFFF",
  gray: "#50514F",
  grey: "#50514F",
  red: "#EB0D1B",
  yellow: "#FFDA17",
  green: "#39A649",
  blue: "#3e64ff",
  navy: "#001f3f",
  aqua: "#7FDBFF",
  teal: "#39CCCC",
  olive: "#3D9970",
  maroon: "#85144b",
  fuchsia: "#F012BE",
  purple: "#b10dc9",
  silver: "#DDDDDD"
};

const alerts = {
  success: {
    color: "white",
    backgroundColor: "green"
  },
  error: {
    color: "white",
    backgroundColor: "red"
  },
  warning: {
    color: "navy",
    backgroundColor: "yellow"
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
