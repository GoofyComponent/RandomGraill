import { User } from 'firebase/auth';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { UserPreferences } from '@/types/user';

interface UserState {
  user: User | null | undefined;
  userPreferences: UserPreferences | null;
  isAuthenticated: boolean;
  login: (userData: User) => void;
  logout: () => void;
  updatePreferences: (newPreferences: UserPreferences) => void;
}

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null, // Par défaut, l'utilisateur est non connecté
      userPreferences: null,
      isAuthenticated: false,
      login: (userData: User) =>
        set({
          user: userData,
          userPreferences: {
            rangeArea: 500,
          },
          isAuthenticated: true,
        }),
      logout: () =>
        set({
          user: null,
          isAuthenticated: false,
        }),
      updatePreferences: (newPreferences: UserPreferences) => {
        console.log('update preferences');
        console.log(newPreferences);
        set((state) => ({
          userPreferences: {
            ...state.userPreferences,
            ...newPreferences,
          },
        }));
      },
    }),
    {
      name: 'userStore',
    },
  ),
);

export default useUserStore;
