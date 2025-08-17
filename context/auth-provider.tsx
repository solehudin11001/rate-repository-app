import { ME } from "@/graphql/queries";
import type { ContextType, UserType } from "@/types";
import type { AuthStorage } from "@/utils/auth-storage";
import { useQuery } from "@apollo/client";
import { createContext, useContext } from "react";

interface Props {
	children: React.ReactNode;
	value: AuthStorage;
}

const AuthContext = createContext<ContextType<AuthStorage> | null>(null);

export function AuthProvider({ children, value }: Props) {
	const { data } = useQuery<UserType>(ME);
	const values = {
		user: data,
		storage: value,
	};

	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

export function authConsumer() {
	return useContext(AuthContext);
}
