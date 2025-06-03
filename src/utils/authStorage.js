import AsyncStorage from "@react-native-async-storage/async-storage"

class AuthStorage {
  constructor(namespace = "auth") {
    this.namespace = namespace
  }

  async getAccessToken() {
    const rawAccessToken = await AsyncStorage.getItem(`${this.namespace}:accessToken`)
    return rawAccessToken ? JSON.parse(rawAccessToken) : null
  }

  async setAccessToken(accessToken) {
    const jsonAccessToken = JSON.stringify(accessToken)
    await AsyncStorage.setItem(`${this.namespace}:accessToken`, jsonAccessToken)
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:accessToken`)
  }
}

export const setAccessToken = async (accessToken) => {
  const tokenStorage = new AuthStorage("token")
  await tokenStorage.setAccessToken(accessToken)
}

export const getAccessToken = async () => {
  const tokenStorage = new AuthStorage("token")
  return await tokenStorage.getAccessToken()
}

export const removeAccessToken = async () => {
  const tokenStorage = new AuthStorage("token")
  await tokenStorage.removeAccessToken()
}

export default AuthStorage