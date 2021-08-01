import { Colors } from "./types";

export const baseColors = {
  failure: "#F72B50",
  primary: "#48a1e2",
  primaryBright: "#62bbef",
  primaryDark: "#48a1e2",
  secondary: "#7645D9",
  success: "#68CF29",
  warning: "#FFAB2D",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputBorder: "#cccccc",
  tertiary: "#EFF4F5",
  text: "#452A7A",
  textDisabled: "#BDC2C4",
  textSubtle: "#278CC7",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#e9f1fd",
  background: "#010101",
  backgroundDisabled: "#999",
  contrast: "#FFFFFF",
  invertedContrast: "#ccc7c7",
  input: "#ccc7c7",
  inputBorder: "#cccccc",
  primaryDark: "#278CC7",
  tertiary: "#2d2f37",
  text: "#000000",
  textDisabled: "#666171",
  textSubtle: "#000000",
  borderColor: "#524B63",
  card: "#B2BDCC",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #1f606f 0%, #164865 100%)",
  },
};
