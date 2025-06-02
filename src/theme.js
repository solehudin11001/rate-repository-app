import { Platform } from "react-native";

const theme = {
  colors: {
    background: "#0a0a0a",
    backgroundSecondary: "#171717",
    foreground: "#fafafa",
    muted: "#a1a1a1",
    primary: "#2b7fff",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      iod: "Arial",
      android: "Roboto",
      default: "System",
    }),
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};

export default theme;
