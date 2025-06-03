import { useMutation } from "@apollo/client"
import { AUTHENTICATE } from "../graphql/queries"
import useAuthStorage from "./useAuthStorage"
import { useApolloClient } from "@apollo/client"

const useSignIn = () => {
  const [mutate, {data}] = useMutation(AUTHENTICATE)
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()

  const signIn = async ({username, password}) => {
    const {data} = await mutate({
      variables: {
        credentials: {
          username,
          password
        }
      }
    })
    await authStorage.setAccessToken(data.authenticate.accessToken)
    apolloClient.resetStore()

    return data
  }

  return [signIn, data]
}

export default useSignIn