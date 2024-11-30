import { create } from 'zustand';

const useAuthStore = create((set) => ({
  user: null,
  userType: null, // 'client' or 'staff'
  setUser: (user, userType) => set({ user, userType }),
  logout: () => set({ user: null, userType: null }),
}));

export default useAuthStore;