import { useCurrentUser } from "@/hooks/useCurrentUser";
import type { ContextType } from "@/types";
import type { AuthStorage } from "@/utils/auth-storage";
import { createContext, useContext } from "react";

interface Props {
	children: React.ReactNode;
	value: AuthStorage;
}

const AuthContext = createContext<ContextType<AuthStorage> | null>(null);

export function AuthProvider({ children, value }: Props) {
	const { user } = useCurrentUser();
	const values = {
		user: user,
		storage: value,
	};

	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

export function authConsumer() {
	return useContext(AuthContext);
}
