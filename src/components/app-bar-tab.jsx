import { Pressable, StyleSheet } from "react-native";
import Text from "./text";
import theme from "../theme";

export default function AppBarTab() {
  return (
    <Pressable style={styles.container}>
      <Text variant="subheading" style={styles.text}>
        Repositories
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 14,
    paddingVertical: 24,
  },
  text: {
    fontSize: 28,
  },
});
