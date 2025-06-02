import { Pressable, StyleSheet, TextInput, View } from "react-native";
import Text from "./text";
import theme from "../theme";
import { useFormik } from "formik";

export default function SignIn() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor={theme.colors.muted}
        style={styles.input}
        placeholder="Username"
        value={formik.initialValues.username}
        onChange={formik.handleChange("username")}
      />
      <TextInput
        placeholderTextColor={theme.colors.muted}
        style={styles.input}
        secureTextEntry
        placeholder="Password"
        value={formik.initialValues.password}
        onChange={formik.handleChange("password")}
      />
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
