import AsyncStorage from "@react-native-async-storage/async-storage";

export class AuthStorage {
	namespace: string;
	constructor(namespace = "auth") {
		this.namespace = namespace;
	}

	async getAccessToken() {
		const accessToken = await AsyncStorage.getItem(this.namespace);
		return accessToken ? JSON.parse(accessToken) : "";
	}

	async saveAccessToken(accessToken: string) {
		await AsyncStorage.setItem(this.namespace, JSON.stringify(accessToken));
	}

	async clearAccessToken() {
		await AsyncStorage.removeItem(this.namespace);
	}
}
