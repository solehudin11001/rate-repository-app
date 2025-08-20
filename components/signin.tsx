import { colors } from "@/constants/theme";
import { SIGNIN } from "@/graphql/mutations";
import { SIGNINSCHEMA } from "@/types/schema";
import { useMutation } from "@apollo/client";
import { useRouter } from "expo-router";
import { Formik } from "formik";
import { StyleSheet, View } from "react-native";
import Button from "./ui/button";
import Input from "./ui/input";

export default function SignIn() {
	const [mutate, { error }] = useMutation(SIGNIN);
	const router = useRouter();

	if (error) console.log("Failed to sign in: ", error);

	return (
		<View style={styles.container}>
			<Formik
				initialValues={{ username: "", password: "" }}
				validationSchema={SIGNINSCHEMA}
				onSubmit={async (values, actions) => {
					await mutate({
						variables: {
							user: {
								username: values.username,
								password: values.password,
							},
						},
					});
					router.replace({ pathname: "../auth/login" });
					actions.resetForm();
				}}
			>
				{({ handleSubmit, isValid }) => (
					<View style={styles.form}>
						<Input name="username" placeholder="Username" />
						<Input name="password" placeholder="Password" sensitive />
						<Input
							name="passwordConfirm"
							placeholder="Password Confirmation"
							sensitive
						/>
						<Button disabled={!isValid} onPress={() => handleSubmit()}>
							Sign In
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
});
