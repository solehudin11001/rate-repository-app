import { Image, StyleSheet, View } from "react-native";
import Text from "./text";
import Badge from "./badge";
import CopyGroup from "./copy-group";
import theme from "../theme";

export default function RepositoryItem({ repository }) {
  return (
    <View style={styles.item}>
      <View style={styles.itemBody}>
        <Image style={styles.itemImage} source={{ uri: repository.ownerAvatarUrl }} alt="Avatar" />
        <View style={styles.itemGroup}>
          <View style={styles.itemCopy}>
            <Text variant="subheading">{repository.fullName}</Text>
            <Text>{repository.description}</Text>
            <Badge text={repository.language} />
          </View>
          <View style={styles.itemList}>
            <CopyGroup label="Stars" value={repository.stargazersCount} />
            <CopyGroup label="Forks" value={repository.forksCount} />
            <CopyGroup label="Reviews" value={repository.reviewCount} />
            <CopyGroup label="Rating" value={repository.ratingAverage} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: theme.colors.backgroundSecondary,
    marginBottom: 24,
    padding: 14,
  },
  itemBody: {
    flexDirection: "row",
    gap: 24,
  },
  itemImage: {
    borderRadius: 8,
    height: 56,
    width: 56,
  },
  itemGroup: {
    flex: 1,
    gap: 24,
  },
  itemCopy: {
    alignItems: "flex-start",
    flex: 1,
    gap: 10,
  },
  itemList: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
