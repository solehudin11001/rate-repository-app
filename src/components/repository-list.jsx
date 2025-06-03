import { FlatList, StyleSheet } from "react-native";
import RepositoryItem from "./repository-item";
import theme from "../theme";
import useRepositories from "../hooks/useRepositories";
import Text from "./text";

export default function RepositoryList() {
  const { repositories, error, loading } = useRepositories();

  if (loading) return <Text variant="subheading">Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <FlatList
      data={repositories}
      renderItem={({ item }) => <RepositoryItem repository={item} />}
      keyExtractor={(item) => item.id}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
  },
});
