import { View, StyleSheet, ScrollView } from "react-native";
import { AppTab, SignInTab, SignOutTab } from "./app-bar-tab";
import Constant from "expo-constants";
import { useQuery } from "@apollo/client";
import { ME } from "../graphql/queries";

export default function AppBar() {
  const { data } = useQuery(ME, {
    fetchPolicy: "cache-and-network",
  })

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        <AppTab />
        {data && data.me ? <SignOutTab /> : <SignInTab />}
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
