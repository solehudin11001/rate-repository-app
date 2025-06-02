import { StyleSheet, View } from "react-native";
import { Navigate, Route, Routes } from "react-router-native";
import AppBar from "./app-bar";
import RepositoryList from "./repository-list";
import SignIn from "./sign-in";
import theme from "../theme";

export default function Main() {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexShrink: 1,
    backgroundColor: theme.colors.background,
  },
});
