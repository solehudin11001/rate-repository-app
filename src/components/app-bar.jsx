import { View, StyleSheet, ScrollView } from "react-native";
import { AppTab, SignInTab } from "./app-bar-tab";
import Constant from "expo-constants";

export default function AppBar() {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        <AppTab />
        <SignInTab />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constant.statusBarHeight,
  },
  scrollView: {
    alignItems: "center",
    flexDirection: "row",
    flexGrow: 1,
    justifyContent: "space-between",
    paddingHorizontal: 14,
    paddingVertical: 24,
  },
});
