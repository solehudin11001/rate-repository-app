import { Pressable, StyleSheet, TextInput, View } from "react-native";
import Text from "./text";
import theme from "../theme";
import { useFormik } from "formik";
import * as yup from "yup";

const signInSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export default function SignIn() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: signInSchema,
    onSubmit: (values) => {
      console.log("Sign in", values.username);
    },
  });

  const getInputStyle = (field) => {
    return [
      styles.input,
      formik.errors[field] && formik.touched[field] && { borderColor: "#d73a4a" },
    ];
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor={theme.colors.muted}
        style={getInputStyle("username")}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
      />
      {formik.errors.username && formik.touched.username && (
        <Text style={{ color: "#d73a4a" }}>{formik.errors.username}</Text>
      )}
      <TextInput
        placeholderTextColor={theme.colors.muted}
        style={getInputStyle("password")}
        secureTextEntry
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
      />
      {formik.errors.password && formik.touched.password && (
        <Text style={{ color: "#d73a4a" }}>{formik.errors.password}</Text>
      )}
      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text variant="subheading" style={styles.buttonText}>
          Sign In
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundSecondary,
    gap: 14,
    padding: 14,
  },
  input: {
    borderColor: theme.colors.muted,
    borderRadius: 8,
    borderWidth: 1,
    color: theme.colors.foreground,
    fontSize: 16,
    height: 52,
    paddingHorizontal: 12,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    paddingVertical: 14,
  },
  buttonText: {
    color: theme.colors.foreground,
    textAlign: "center",
  },
});
