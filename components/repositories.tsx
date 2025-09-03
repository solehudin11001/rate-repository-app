import { FlatList, ScrollView } from "react-native";
import type { Repository } from "../types";
import Card from "./ui/card";
import Separator from "./ui/separator";

interface Props {
	data: Repository[];
}

export default function Repositories({ data }: Props) {
	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<FlatList
				data={data}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <Card data={item} />}
				ItemSeparatorComponent={Separator}
				scrollEnabled={false}
				style={{
					borderRadius: 24,
					marginBottom: 92,
					overflow: "hidden",
				}}
			/>
		</ScrollView>
	);
}
