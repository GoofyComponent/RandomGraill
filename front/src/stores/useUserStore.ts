import { User } from 'firebase/auth';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  user: User | null | undefined;
  isAuthenticated: boolean;
  login: (userData: User) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>(
  persist(
    (set) => ({
      user: null, // Par défaut, l'utilisateur est non connecté
      isAuthenticated: false,
      login: (userData: User) =>
        set({
          user: userData,
          isAuthenticated: true,
        }),
      logout: () =>
        set({
          user: null,
          isAuthenticated: false,
        }),
    }),
    {
      name: 'authStore',
    },
  ),
);

export default useAuthStore;
