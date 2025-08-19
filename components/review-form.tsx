import { REVIEWSCHEMA, type ReviewSchemaType } from "@/types/schema";
import { Formik } from "formik";
import { StyleSheet, View } from "react-native";
import Button from "./ui/button";
import Input from "./ui/input";
import Text from "./ui/text";

interface Props {
	initialValues: ReviewSchemaType;
	onSubmit: (review: ReviewSchemaType) => void;
}

export default function ReviewForm({ initialValues, onSubmit }: Props) {
	return (
		<View style={styles.container}>
			<Text variant="primary" size="lg">
				Create Review
			</Text>
			<Formik
				initialValues={initialValues}
				validationSchema={REVIEWSCHEMA}
				onSubmit={(values, actions) => {
					onSubmit(values);
					actions.resetForm();
				}}
			>
				{({ isValid, handleSubmit }) => (
					<View style={styles.form}>
						<Input name="ownerName" placeholder="Repository owner name" />
						<Input name="repositoryName" placeholder="Repository name" />
						<Input
							name="rating"
							placeholder="Rating between 0 and 100"
							type="numeric"
						/>
						<Input name="text" placeholder="Review" multiline />
						<Button
							disabled={!isValid}
							onPress={() => {
								handleSubmit();
							}}
						>
							Create
						</Button>
					</View>
				)}
			</Formik>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		gap: 24,
	},
	form: {
		gap: 12,
	},
});
