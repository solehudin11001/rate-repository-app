import { ME } from "@/graphql/queries";
import type { AuthStorage } from "@/utils/auth-storage";
import { useQuery } from "@apollo/client";
import { createContext, useContext } from "react";

interface Props {
	children: React.ReactNode;
	value: AuthStorage;
}

interface Me {
	me: {
		id: string;
		username: string;
	};
}

interface Context {
	user: Me | undefined;
	storage: AuthStorage;
}

const AuthContext = createContext<Context | null>(null);

export function AuthProvider({ children, value }: Props) {
	const { data } = useQuery<Me>(ME);
	const values = {
		user: data,
		storage: value,
	};

	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

export function authConsumer() {
	return useContext(AuthContext);
}
