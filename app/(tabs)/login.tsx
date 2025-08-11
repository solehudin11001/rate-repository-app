import { Formik } from "formik";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import * as yup from "yup";

const loginSchema = yup.object({
	username: yup.string().required("Username is required"),
	password: yup
		.string()
		.min(8, "Password must be at least 8 characters")
		.required("Password is required"),
});

export default function Login() {
	return (
		<View style={styles.container}>
			<Formik
				initialValues={{ username: "", password: "" }}
				validationSchema={loginSchema}
				onSubmit={(values, actions) => {
					console.log(values);
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
				}) => (
					<View style={styles.form}>
						<TextInput
							placeholder="Username"
							style={[
								styles.input,
								errors.username && { borderColor: "#ba1a1a" },
							]}
							onChangeText={handleChange("username")}
							onBlur={handleBlur("username")}
							value={values.username}
						/>
						{touched.username && errors.username && (
							<Text style={styles.errorText}>{errors.username}</Text>
						)}
						<TextInput
							secureTextEntry={true}
							placeholder="Password"
							style={[
								styles.input,
								errors.password && { borderColor: "#ba1a1a" },
							]}
							onChangeText={handleChange("password")}
							onBlur={handleBlur("password")}
							value={values.password}
						/>
						{touched.password && errors.password && (
							<Text style={styles.errorText}>{errors.password}</Text>
						)}
						<Pressable style={styles.button} onPress={() => handleSubmit()}>
							<Text style={styles.text}>Login</Text>
						</Pressable>
					</View>
				)}
			</Formik>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#f5fafc",
		height: "100%",
	},
	form: {
		gap: 12,
		padding: 24,
		width: "100%",
	},
	input: {
		borderColor: "#6f797b",
		borderRadius: 8,
		borderWidth: 1,
		height: 48,
		paddingHorizontal: 12,
	},
	button: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#006876",
		borderRadius: 8,
		height: 48,
	},
	text: {
		color: "#ffffff",
		fontSize: 14,
		fontWeight: 600,
	},
	errorText: {
		color: "#ba1a1a",
		fontSize: 12,
	},
});
