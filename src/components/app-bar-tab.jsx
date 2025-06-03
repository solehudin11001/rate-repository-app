import { Link } from "react-router-native";
import Text from "./text";
import { Pressable } from "react-native";
import useAuthStorage from "../hooks/useAuthStorage";
import { useApolloClient } from "@apollo/client";

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

export const SignOutTab = () => {
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()
  
  const handleSignOut = async () => {
    await authStorage.removeAccessToken()
    apolloClient.resetStore()
  }

  return (
    <Pressable onPress={handleSignOut}>
      <Text variant="subheading">Sign Out</Text>
    </Pressable>
  )
}
