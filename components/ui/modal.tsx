import { colors } from "@/constants/theme";
import {
	Modal as NativeModal,
	Pressable,
	StyleSheet,
	View,
} from "react-native";

interface Props {
	children: React.ReactNode;
	isVisible: boolean;
	onClose: () => void;
}

export default function Modal({ children, isVisible, onClose }: Props) {
	return (
		<NativeModal animationType="slide" visible={isVisible} transparent={true}>
			<Pressable style={styles.overlay} onPress={onClose} />
			<View style={styles.modal}>{children}</View>
		</NativeModal>
	);
}

const styles = StyleSheet.create({
	overlay: {
		flex: 1,
		opacity: 0,
	},
	modal: {
		backgroundColor: colors.surfaceContainer,
		padding: 24,
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		elevation: 32,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: -4,
		},
		shadowOpacity: 0.35,
		shadowRadius: 5,
		borderTopLeftRadius: 16,
		borderTopRightRadius: 16,
	},
});
