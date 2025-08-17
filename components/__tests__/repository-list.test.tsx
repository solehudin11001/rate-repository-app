import { suffix } from "@/utils/utils";
import { render } from "@testing-library/react-native";
import Repositorylist from "../repository-list";

describe("Repository List", () => {
	const mockRepositories = {
		totalCount: 8,
		pageInfo: {
			hasNextPage: true,
			endCursor: "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
			startCursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
		},
		edges: [
			{
				node: {
					id: "jaredpalmer.formik",
					fullName: "jaredpalmer/formik",
					description: "Build forms in React, without the tears",
					language: "TypeScript",
					forksCount: 1619,
					stargazersCount: 21856,
					ratingAverage: 88,
					reviewCount: 3,
					ownerAvatarUrl:
						"https://avatars2.githubusercontent.com/u/4060187?v=4",
				},
				cursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
			},
			{
				node: {
					id: "async-library.react-async",
					fullName: "async-library/react-async",
					description: "Flexible promise-based React data loader",
					language: "JavaScript",
					forksCount: 69,
					stargazersCount: 1760,
					ratingAverage: 72,
					reviewCount: 3,
					ownerAvatarUrl:
						"https://avatars1.githubusercontent.com/u/54310907?v=4",
				},
				cursor: "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
			},
		],
	};

	test("renders repository information correctly", async () => {
		const { getAllByTestId } = render(
			<Repositorylist
				data={{ repositories: mockRepositories }}
				loading={false}
			/>,
		);

		const repositoryItems = getAllByTestId("repository");

		expect(repositoryItems).toHaveLength(mockRepositories.edges.length);

		mockRepositories.edges.forEach((edge, index) => {
			const {
				fullName,
				description,
				language,
				forksCount,
				stargazersCount,
				ratingAverage,
				reviewCount,
			} = edge.node;

			const repositoryItem = repositoryItems[index];

			expect(repositoryItem).toHaveTextContent(new RegExp(fullName));
			expect(repositoryItem).toHaveTextContent(new RegExp(description));
			expect(repositoryItem).toHaveTextContent(new RegExp(language));
			expect(repositoryItem).toHaveTextContent(new RegExp(suffix(forksCount)));
			expect(repositoryItem).toHaveTextContent(
				new RegExp(suffix(stargazersCount)),
			);
			expect(repositoryItem).toHaveTextContent(
				new RegExp(suffix(ratingAverage).toString()),
			);
			expect(repositoryItem).toHaveTextContent(
				new RegExp(suffix(reviewCount).toString()),
			);
		});
	});
});
