import { StyleSheet, View } from "react-native";
import Text from "./text";
import theme from "../theme";

export default function Badge({ text }) {
  return (
    <View style={styles.container}>
      <Text variant="subheading" style={styles.text}>
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  text: {
    fontSize: 12,
  },
});
