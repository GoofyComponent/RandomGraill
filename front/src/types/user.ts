import { User } from 'firebase/auth';

interface UserState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

interface UserPreferences {
  rangeArea: number;
}

export type { UserPreferences, UserState };
