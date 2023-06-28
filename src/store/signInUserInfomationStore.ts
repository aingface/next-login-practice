import { create } from 'zustand';

interface signInUserInfomationState {
  year: number | undefined;
  month: number | undefined;
  day: number | undefined;

  email: string | undefined;

  password: string | undefined;
  passwordRepeat: string | undefined;

  setYear: (yearInput: number | undefined) => void;
  setMonth: (monthInput: number | undefined) => void;
  setDay: (dayInput: number | undefined) => void;
  setEmail: (emailIDInput: string) => void;
  setPassword: (passwordInput: string | undefined) => void;
  setPasswordRepeat: (passwordInput: string | undefined) => void;
}

const signInUserInfomationStore = create<signInUserInfomationState>()((set) => ({
  year: undefined,
  month: undefined,
  day: undefined,
  email: undefined,
  password: undefined,
  passwordRepeat: undefined,

  setYear: (yearInput: number | undefined) =>
    set(() => ({
      year: yearInput,
    })),
  setMonth: (monthInput: number | undefined) =>
    set(() => ({
      month: monthInput,
    })),
  setDay: (dayInput: number | undefined) =>
    set(() => ({
      day: dayInput,
    })),

  setEmail: (emailInput: string) =>
    set(() => ({
      email: emailInput,
    })),

  setPassword: (passwordInput: string | undefined) =>
    set(() => ({
      password: passwordInput,
    })),

  setPasswordRepeat: (passwordRepeatInput: string | undefined) =>
    set(() => ({
      passwordRepeat: passwordRepeatInput,
    })),
}));

export default signInUserInfomationStore;
