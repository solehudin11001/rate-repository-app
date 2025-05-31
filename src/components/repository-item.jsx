import { Text, View } from "react-native";

export default function RepositoryItem({ repository }) {
  return (
    <View>
      <Text>{repository.fullName}</Text>
      <Text>{repository.description}</Text>
      <Text>Laguage: {repository.fullName}</Text>
      <Text>Start: {repository.stargazersCount.toLocaleString()}</Text>
      <Text>Forks: {repository.forksCount.toLocaleString()}</Text>
      <Text>Review: {repository.reviewCount.toLocaleString()}</Text>
      <Text>Rating: {repository.ratingAverage.toLocaleString()}</Text>
    </View>
  );
}
