import { Text as NativeText, StyleSheet } from "react-native";
import theme from "../theme";

export default function Text({ variant, style, ...props }) {
  const textStyle = [styles.text, variant === "subheading" && styles.subheading, style];

  return <NativeText style={textStyle} {...props} />;
}

const styles = StyleSheet.create({
  text: {
    color: theme.colors.muted,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  subheading: {
    color: theme.colors.foreground,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },
});
