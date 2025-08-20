import * as yup from "yup";

export const REVIEWSCHEMA = yup.object({
	ownerName: yup
		.string()
		.trim()
		.min(1, "Username must be at least 1 character")
		.max(39, "Username cannot be longer than 39 characters")
		.matches(
			/^[a-zA-Z0-9-]+$/,
			"Username can only contain letters, numbers and hyphens",
		)
		.required("Repository owner's username is required"),
	rating: yup
		.number()
		.transform((_, originalValue) => {
			return originalValue === "" ? null : Number(originalValue);
		})
		.integer("Rating must be a whole number")
		.min(0, "Rating cannot be less than 0")
		.max(100, "Rating cannot be more than 100")
		.required("Rating is required"),
	repositoryName: yup
		.string()
		.trim()
		.min(1, "Repository name must be at least 1 character")
		.max(100, "Repository name cannot be longer than 100 characters")
		.matches(
			/^[a-zA-Z0-9-_.]+$/,
			"Repository name can only contain letters, numbers, hyphens, underscores and dots",
		)
		.required("Repository name is required"),
	text: yup
		.string()
		.trim()
		.max(2000, "Review text cannot be longer than 2000 characters")
		.optional(),
});

export type ReviewSchemaType = yup.InferType<typeof REVIEWSCHEMA>;

export const LOGINSCHEMA = yup.object({
	username: yup.string().required("Username is required"),
	password: yup
		.string()
		.trim()
		.min(8, "Password must be at least 8 characters")
		.required("Password is required"),
});

export const SIGNINSCHEMA = yup.object({
	username: yup
		.string()
		.trim()
		.min(5, "Username must be at least 5 character")
		.max(30, "Username cannot be longer than 30 characters")
		.required("Username is required"),
	password: yup
		.string()
		.trim()
		.min(5, "Password must be at least 5 character")
		.max(30, "Password cannot be longer than 50 characters")
		.required("Password is required"),
	passwordConfirm: yup
		.string()
		.trim()
		.oneOf([yup.ref("password"), "Password does not match"])
		.required("Password confirm is required"),
});
