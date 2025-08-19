import { colors } from "@/constants/theme";
import { Field, type FieldProps } from "formik";
import { StyleSheet, TextInput } from "react-native";
import Text from "./text";

interface Props {
	name: string;
	placeholder: string;
	sensitive?: boolean;
	type?: "default" | "numeric";
	multiline?: boolean;
}

export default function Input({
	name,
	placeholder,
	sensitive = false,
	type = "default",
	multiline = false,
}: Props) {
	return (
		<Field name={name}>
			{({ field, form, meta }: FieldProps) => (
				<>
					<TextInput
						placeholder={placeholder}
						secureTextEntry={sensitive}
						keyboardType={type}
						multiline={multiline}
						style={[styles.input, meta.error && styles.inputError]}
						onChangeText={form.handleChange(name)}
						onBlur={field.onBlur(name)}
						value={field.value}
					/>
					{meta.touched && meta.error && (
						<Text style={styles.textError}>{meta.error}</Text>
					)}
				</>
			)}
		</Field>
	);
}

const styles = StyleSheet.create({
	input: {
		borderColor: colors.outline,
		borderRadius: 8,
		borderWidth: 1,
		height: 48,
		paddingHorizontal: 16,
	},
	inputError: {
		backgroundColor: colors.errorContainer,
		borderColor: colors.error,
	},
	textError: {
		color: colors.error,
		fontSize: 12,
	},
});
