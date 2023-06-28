import { create } from 'zustand';

interface jwtStoreState {
  jwt: string | undefined;
  setJwt: (jwtData: string) => void;
}

const jwtStore = create<jwtStoreState>()((set) => ({
  jwt: undefined,
  setJwt: (jwtData: string) => set({ jwt: jwtData }),
}));

export default jwtStore;
