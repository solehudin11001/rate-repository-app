import MaterialIcon from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import { Modal, Pressable, TouchableWithoutFeedback, View } from "react-native";
import Button from "../../components/ui/button";
import { colors } from "../../constants/colors";
import { useArguments } from "../../contexts/arguments-context";
import { PICKER_ITEMS } from "../../lib/variabels";
import Text from "./text";

export default function Picker() {
	const [isVisible, setIsVisible] = useState(false);
	const [selectedValue, setSelectedValue] = useState("CREATED_AT");
	const setArgumentsQuery = useArguments();

	function handleVisible() {
		setIsVisible(!isVisible);
	}

	function handlePicker(value: string) {
		const [orderBy, orderDirection] = value.split(":");
		setArgumentsQuery((prev) => ({ ...prev, orderBy, orderDirection }));
		setIsVisible(false);
		setSelectedValue(value);
	}

	return (
		<>
			<Modal visible={isVisible} onRequestClose={handleVisible} transparent>
				<TouchableWithoutFeedback onPress={handleVisible}>
					<View style={{ flex: 1 }}>
						<TouchableWithoutFeedback>
							<View
								style={{
									backgroundColor: colors.surfaceContainer,
									borderRadius: 24,
									padding: 8,
									position: "absolute",
									right: 24,
									top: 96,
									width: 225,
								}}
							>
								{PICKER_ITEMS.map((item) => (
									<Pressable
										key={item.id}
										onPress={() => handlePicker(item.value)}
									>
										<Text
											style={[
												{
													borderRadius: 16,
													height: 40,
													paddingHorizontal: 16,
													textAlign: "right",
													verticalAlign: "middle",
												},
												item.value === selectedValue && {
													backgroundColor: colors.primary,
												},
											]}
										>
											{item.label}
										</Text>
									</Pressable>
								))}
							</View>
						</TouchableWithoutFeedback>
					</View>
				</TouchableWithoutFeedback>
			</Modal>
			<Button size="icon" rounded={isVisible} onPress={handleVisible}>
				<MaterialIcon name="sort" size={16} color={colors.onSurface} />
			</Button>
		</>
	);
}
