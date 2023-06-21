import { create } from 'zustand';

interface signInUserInfomationState {
  year: number | null;
  month: number | null;
  day: number | null;
  email: string | null;
  password: string | null;

  setYear: (yearInput: number) => void;
  setMonth: (monthInput: number) => void;
  setDay: (dayInput: number) => void;
  setEmail: (emailInput: string) => void;
  setPassword: (passwordInput: string) => void;
}

const signInUserInfomationStore = create<signInUserInfomationState>()((set) => ({
  year: null,
  month: null,
  day: null,
  email: null,
  password: null,

  setYear: (yearInput: number) =>
    set(() => ({
      year: yearInput,
    })),
  setMonth: (monthInput: number) =>
    set(() => ({
      month: monthInput,
    })),
  setDay: (dayInput: number) =>
    set(() => ({
      day: dayInput,
    })),
  setEmail: (emailInput: string) =>
    set(() => ({
      email: emailInput,
    })),
  setPassword: (passwordInput: string) =>
    set(() => ({
      password: passwordInput,
    })),
}));

export default signInUserInfomationStore;
