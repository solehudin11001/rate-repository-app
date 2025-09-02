import { TabList, TabSlot, Tabs, TabTrigger } from "expo-router/ui";
import Animated, { useSharedValue } from "react-native-reanimated";
import TabButton from "../../components/ui/tab-button";
import { colors } from "../../constants/colors";
import { TABS_LABEL } from "../../lib/variabels";

export default function TabLayout() {
	const left = useSharedValue(16);

	return (
		<Tabs>
			<TabSlot />
			<TabList
				style={{
					alignItems: "center",
					backgroundColor: colors.surfaceContainer,
					borderRadius: 32,
					height: 64,
					gap: 24,
					paddingHorizontal: 16,
					position: "absolute",
					bottom: 24,
					left: 96,
					width: 192,
				}}
			>
				<Animated.View
					style={{
						alignItems: "center",
						backgroundColor: colors.primary,
						borderRadius: 20,
						height: 40,
						justifyContent: "center",
						left,
						position: "absolute",
						width: 64,
					}}
				/>
				{TABS_LABEL.map(({ id, name, path, icon }) => (
					<TabTrigger key={id} name={name} href={path} asChild>
						<TabButton animation={left} index={id} icon={icon} />
					</TabTrigger>
				))}
			</TabList>
		</Tabs>
	);
}
