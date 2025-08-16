import Button from "@/components/ui/button";
import { colors } from "@/constants/theme";
import { authConsumer } from "@/context/auth-provider";
import { LOGIN } from "@/graphql/mutations";
import { useAuth } from "@/hooks/useAuth";
import { useApolloClient } from "@apollo/client";
import { useRouter } from "expo-router";
import { Formik } from "formik";
import { StyleSheet, Text, TextInput, View } from "react-native";
import * as yup from "yup";

interface Auth {
	authenticate: {
		accessToken: string;
	};
}

const loginSchema = yup.object({
	username: yup.string().required("Username is required"),
	password: yup
		.string()
		.min(8, "Password must be at least 8 characters")
		.required("Password is required"),
});

export default function Login() {
	const [authenticate] = useAuth<Auth>(LOGIN);
	const auth = authConsumer();
	const client = useApolloClient();
	const router = useRouter();

	return (
		<View style={styles.container}>
			<Formik
				initialValues={{ username: "", password: "" }}
				validationSchema={loginSchema}
				onSubmit={async (values, actions) => {
					const { username, password } = values;

					try {
						const { data } = await authenticate(username, password);
						if (data?.authenticate.accessToken) {
							await auth?.storage.saveAccessToken(
								data.authenticate.accessToken,
							);
							client.resetStore();
							router.replace("/");
						}
					} catch (error) {
						console.log("Failed to login: ", error);
					}

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
