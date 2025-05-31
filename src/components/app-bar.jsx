import { View, StyleSheet } from "react-native";
import AppBarTab from "./app-bar-tab";
import theme from "../theme";
import Constant from "expo-constants";

export default function AppBar() {
  return (
    <View style={styles.container}>
      <AppBarTab />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    paddingTop: Constant.statusBarHeight,
  },
});
