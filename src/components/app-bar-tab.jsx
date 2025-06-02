import { Link } from "react-router-native";
import Text from "./text";

export const AppTab = () => {
  return (
    <Link to="/">
      <Text variant="subheading">Repositories</Text>
    </Link>
  );
};

export const SignInTab = () => {
  return (
    <Link to="/signin">
      <Text variant="subheading">Sign In</Text>
    </Link>
  );
};
