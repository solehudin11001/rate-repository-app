import { StyleSheet, View } from "react-native";
import Text from "./text";

const suffix = (number) => {
  return number >= 1000 ? `${(number / 1000).toFixed(1)}k` : number.toString();
};

export default function CopyGroup({ label, value }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text variant="subheading">{suffix(value)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "column-reverse",
  },
  label: {
    fontSize: 12,
  },
});
