import { create } from 'zustand';

interface isLoggedInStoreState {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

const isLoggedInStore = create<isLoggedInStoreState>()((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn: isLoggedIn }),
}));

export default isLoggedInStore;
