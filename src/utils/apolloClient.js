import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const createApolloClient = new ApolloClient({
  link: new HttpLink({
    uri: "http://192.168.96.108:4000/graphql",
  }),
  cache: new InMemoryCache(),
});

export default createApolloClient;
