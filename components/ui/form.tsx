import Button from "@/components/ui/button";
import { colors } from "@/constants/theme";
import { Formik } from "formik";
import { StyleSheet, Text, TextInput, View } from "react-native";
import * as yup from "yup";

interface Props {
	handleSubmit: (values: {
		username: string;
		password: string;
	}) => Promise<void>;
}

const loginSchema = yup.object({
	username: yup.string().required("Username is required"),
	password: yup
		.string()
		.min(8, "Password must be at least 8 characters")
		.required("Password is required"),
});

export default function Form({ handleSubmit }: Props) {
	return (
		<View style={styles.container}>
			<Formik
				initialValues={{ username: "", password: "" }}
				validationSchema={loginSchema}
				onSubmit={async (values, actions) => {
					await handleSubmit(values);
					actions.resetForm();
				}}
			>
				{({
					handleChange,
					handleBlur,
					handleSubmit,
					values,
					errors,
					touched,
					isValid,
				}) => (
					<View style={styles.form}>
						<TextInput
							placeholder="Username"
							style={[styles.input, errors.username && styles.inputError]}
							onChangeText={handleChange("username")}
							onBlur={handleBlur("username")}
							value={values.username}
						/>
						{touched.username && errors.username && (
							<Text style={styles.textError}>{errors.username}</Text>
						)}
						<TextInput
							secureTextEntry={true}
							placeholder="Password"
							style={[styles.input, errors.password && styles.inputError]}
							onChangeText={handleChange("password")}
							onBlur={handleBlur("password")}
							value={values.password}
						/>
						{touched.password && errors.password && (
							<Text style={styles.textError}>{errors.password}</Text>
						)}
						<Button disabled={!isValid} onPress={() => handleSubmit()}>
							Login
						</Button>
					</View>
				)}
			</Formik>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.surfaceContainer,
		flex: 1,
	},
	form: {
		gap: 12,
		padding: 24,
	},
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
