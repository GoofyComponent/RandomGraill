import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppState {}

const useUserStore = create<AppState>()(
  persist(() => ({}), {
    name: 'appStore',
  }),
);

export default useUserStore;
