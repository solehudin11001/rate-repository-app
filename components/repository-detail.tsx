import { colors } from "@/constants/theme";
import { REVIEW } from "@/graphql/mutations";
import { ME, REPOSITORY_DETAILS } from "@/graphql/queries";
import type { RepositoryDetailType } from "@/types";
import type { ReviewSchemaType } from "@/types/schema";
import { useMutation } from "@apollo/client";
import * as Linking from "expo-linking";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Repository from "./repository";
import ReviewForm from "./review-form";
import Button from "./ui/button";
import Modal from "./ui/modal";

interface Props {
	data: RepositoryDetailType | undefined;
}

export default function RepositoryDetail({ data }: Props) {
	const [modalVisible, setModalVisible] = useState(false);
	const [mutate] = useMutation(REVIEW, {
		refetchQueries: [
			{
				query: REPOSITORY_DETAILS,
				variables: { id: data?.repository.id },
			},
			{
				query: ME,
				variables: { includeReviews: true },
			},
		],
	});

	const [ownerName, repositoryName] = data
		? data.repository.fullName.split("/")
		: ["", ""];

	const initialValues = {
		ownerName: ownerName,
		rating: 0,
		repositoryName: repositoryName,
		text: "",
	};

	function handleToggleModal() {
		setModalVisible(!modalVisible);
	}

	async function handleSubmit(review: ReviewSchemaType) {
		try {
			await mutate({
				variables: {
					review: {
						...review,
						rating: parseInt(String(review.rating)),
					},
				},
			});
			handleToggleModal();
		} catch (error) {
			console.log("Review error: ", error);
		}
	}

	return (
		<View style={styles.container}>
			{data && <Repository item={data.repository} />}
			<Modal isVisible={modalVisible} onClose={handleToggleModal}>
				<ReviewForm initialValues={initialValues} onSubmit={handleSubmit} />
			</Modal>
			<View style={styles.inner}>
				<Button onPress={() => Linking.openURL(data?.repository.url || "")}>
					Github
				</Button>
				<Button onPress={handleToggleModal}>Review</Button>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.surfaceContainer,
		flex: 1,
	},
	inner: {
		gap: 8,
		paddingHorizontal: 24,
	},
});
