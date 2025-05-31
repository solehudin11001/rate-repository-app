import { StyleSheet, View } from "react-native";
import Constant from "expo-constants";
import RepositoryList from "./repository-list";

export default function Main() {
  return (
    <View style={style.container}>
      <RepositoryList />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    marginTop: Constant.statusBarHeight,
  },
});
