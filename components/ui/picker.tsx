import { colors } from "@/constants/theme";
import Octicons from "@expo/vector-icons/Octicons";
import { Picker as NativePicker } from "@react-native-picker/picker";
import { useRef } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import type { Props } from "../header";

export default function Picker({ sortedBy, setSortedPicker }: Props) {
	const pickerRef = useRef<NativePicker<string>>(null);

	return (
		<View style={styles.picker}>
			<Pressable
				style={styles.trigger}
				onPress={() => pickerRef.current?.focus()}
			>
				<Octicons name="sort-desc" size={24} />
			</Pressable>
			<NativePicker
				ref={pickerRef}
				selectedValue={sortedBy}
				onValueChange={(value) => setSortedPicker(value)}
				selectionColor={colors.primary}
				style={styles.native}
			>
				<NativePicker.Item
					label="Latest repositories"
					value="CREATED_AT:DESC"
				/>
				<NativePicker.Item
					label="High rated repositories"
					value="RATING_AVERAGE:DESC"
				/>
				<NativePicker.Item
					label="Lowest rated repositories"
					value="RATING_AVERAGE:ASC"
				/>
			</NativePicker>
		</View>
	);
}

const styles = StyleSheet.create({
	picker: {
		height: 24,
		position: "relative",
		width: 24,
	},
	trigger: {
		position: "absolute",
		inset: 0,
	},
	native: {
		display: "none",
	},
	dialog: {
		borderRadius: 24,
		overflow: "hidden",
	},
});
