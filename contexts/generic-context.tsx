import { createContext, useContext } from "react";

/**
 * Creates a type-safe, reusable React context.
 * This factory function returns a Provider component and a consumer hook.
 *
 * @example
 * // 1. Create a new context
 * const [UserProvider, useUser] = createGenericContext<User | null>();
 *
 * // 2. Wrap a component tree with the provider
 * <UserProvider value={{ name: 'John Doe' }}>
 *   <Profile />
 * </UserProvider>
 *
 * // 3. Consume the context value in a child component
 * function Profile() {
 *   const user = useUser();
 *   return <div>{user?.name}</div>;
 * }
 */
export function createGenericContext<T>() {
	const GenericContext = createContext<T | undefined>(undefined);

	function Provider({
		children,
		value,
	}: {
		children: React.ReactNode;
		value: T;
	}) {
		return (
			<GenericContext.Provider value={value}>
				{children}
			</GenericContext.Provider>
		);
	}

	function useGenericContext() {
		const context = useContext(GenericContext);
		if (context === undefined) {
			throw new Error(
				"useGenericContext must be used within a corresponding Provider",
			);
		}
		return context;
	}

	return [Provider, useGenericContext] as const;
}
