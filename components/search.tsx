import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useEffect, useState } from "react";
import { TextInput, View } from "react-native";
import { colors } from "../constants/colors";
import { useArguments } from "../contexts/arguments-context";

interface Props {
	expanded: boolean;
	setExpanded: (expanded: boolean) => void;
}

export default function Search({ expanded, setExpanded }: Props) {
	const [query, setQuery] = useState("");
	const setArgumentsQuery = useArguments();

	useEffect(() => {
		const search = setTimeout(() => {
			setArgumentsQuery((prev) => ({ ...prev, searchKeyword: query }));
		}, 500);
		return () => clearTimeout(search);
	}, [query, setArgumentsQuery]);

	return (
		<View
			style={[
				{
					alignItems: "center",
					backgroundColor: colors.surfaceContainer,
					borderRadius: 4,
					flexDirection: "row",
					height: 48,
					paddingHorizontal: 24,
					width: 165,
				},
				expanded && { borderRadius: 24, flex: 1 },
			]}
		>
			<MaterialIcons name="magnify" size={16} color={colors.onSurfaceVariant} />
			<TextInput
				placeholder="Search"
				placeholderTextColor={colors.onSurfaceVariant}
				style={{
					color: colors.onSurface,
					flex: 1,
					fontSize: 14,
				}}
				value={query}
				onChangeText={(text) => setQuery(text)}
				onFocus={() => setExpanded(true)}
				onBlur={() => setExpanded(false)}
			/>
		</View>
	);
}
