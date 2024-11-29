import { createContext, PropsWithChildren, useContext, useEffect } from 'react';
import { useStorageState } from './useStorageState';
import { useRouter, useSegments } from 'expo-router';

type AuthType = {
  signIn: () => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}

const AuthContext = createContext<AuthType>({signIn: () => null, signOut: () => null, session: null, isLoading: false})

// This hook can be used to access the user info.
export function useSession() {
  const value = useContext(AuthContext)

  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
}

function useProtectedRoute(session: string | null) {
  const segments = useSegments()
  const router = useRouter()

  useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)"

    if (!session && !inAuthGroup) {

      router.replace("/(auth)")

    } else if (session && inAuthGroup) {

      router.replace("/(tabs)/home")

    }
  }, [session, segments])
}

export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState('session');

  useProtectedRoute(session)

  return (
    <AuthContext.Provider
      value={{
        signIn: () => {
          // Perform sign-in logic here
          setSession('xxx');
        },
        signOut: () => {
          setSession(null);
        },
        session,
        isLoading,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
