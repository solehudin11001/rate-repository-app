import { useState } from "react";
import { View } from "react-native";
import Search from "./search";
import Picker from "./ui/picker";
import Text from "./ui/text";

export default function Header() {
	const [isExpand, setIsExpand] = useState(false);

	return (
		<View
			style={{
				alignItems: "center",
				flexDirection: "row",
				justifyContent: "space-between",
			}}
		>
			{!isExpand && <Text weight="medium">Hello, solehudin</Text>}
			<View
				style={[
					{
						alignItems: "center",
						borderRadius: 24,
						flexDirection: "row",
						gap: 4,
						overflow: "hidden",
						width: 225,
					},
					isExpand && { flex: 1 },
				]}
			>
				<Search expanded={isExpand} setExpanded={setIsExpand} />
				<Picker />
			</View>
		</View>
	);
}
