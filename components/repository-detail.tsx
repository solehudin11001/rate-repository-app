import { colors } from "@/constants/theme";
import type { RepositoryDetailType } from "@/types";
import * as Linking from "expo-linking";
import { StyleSheet, View } from "react-native";
import Repository from "./repository";
import Button from "./ui/button";

interface Props {
	data: RepositoryDetailType | undefined;
}

export default function RepositoryDetail({ data }: Props) {
	return (
		<View style={styles.container}>
			{data && <Repository item={data.repository} />}
			<View style={styles.inner}>
				<Button onPress={() => Linking.openURL(data?.repository.url || "")}>
					Github
				</Button>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.surfaceContainer,
		flex: 1,
	},
	inner: {
		paddingHorizontal: 24,
	},
});
