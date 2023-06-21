import { create } from 'zustand';

interface signInUserInfomationState {
  year: number | null;
  month: number | null;
  day: number | null;
  emailID: string | null;
  emailDomain: string | null;
  password: string | null;

  setYear: (yearInput: number) => void;
  setMonth: (monthInput: number) => void;
  setDay: (dayInput: number) => void;
  setEmailID: (emailIDInput: string) => void;
  setEmailDomain: (emailDomainInput: string) => void;
  setPassword: (passwordInput: string) => void;
}

const signInUserInfomationStore = create<signInUserInfomationState>()((set) => ({
  year: null,
  month: null,
  day: null,
  emailID: null,
  emailDomain: null,
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
  setEmailID: (emailIDInput: string) =>
    set(() => ({
      emailID: emailIDInput,
    })),

  setEmailDomain: (emailDomainInput: string) =>
    set(() => ({
      emailDomain: emailDomainInput,
    })),
  setPassword: (passwordInput: string) =>
    set(() => ({
      password: passwordInput,
    })),
}));

export default signInUserInfomationStore;
