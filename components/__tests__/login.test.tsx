import { fireEvent, render, waitFor } from "@testing-library/react-native";
import Form from "../ui/form";

describe("Login", () => {
	test("Fill in the username and password fields on the login form, then press the login button correctly", async () => {
		const onSubmit = jest.fn();
		const { getByPlaceholderText, getByText } = render(
			<Form handleSubmit={onSubmit} />,
		);

		fireEvent.changeText(getByPlaceholderText("Username"), "kalle");
		fireEvent.changeText(getByPlaceholderText("Password"), "password");
		fireEvent.press(getByText("Login"));

		await waitFor(() => {
			expect(onSubmit).toHaveBeenCalledTimes(1);
			expect(onSubmit.mock.calls[0][0]).toEqual({
				username: "kalle",
				password: "password",
			});
		});
	});
});
