import { create } from 'zustand';

interface signInUserInfomationState {
  year: number | undefined;
  month: number | undefined;
  day: number | undefined;

  emailID: string | undefined;
  emailDomain: string | undefined;

  password: string | undefined;
  passwordRepeat: string | undefined;

  setYear: (yearInput: number | undefined) => void;
  setMonth: (monthInput: number | undefined) => void;
  setDay: (dayInput: number | undefined) => void;
  setEmailID: (emailIDInput: string) => void;
  setEmailDomain: (emailDomainInput: string) => void;
  setPassword: (passwordInput: string | undefined) => void;
  setPasswordRepeat: (passwordInput: string | undefined) => void;
}

const signInUserInfomationStore = create<signInUserInfomationState>()((set) => ({
  year: undefined,
  month: undefined,
  day: undefined,
  emailID: undefined,
  emailDomain: undefined,
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

  setEmailID: (emailIDInput: string) =>
    set(() => ({
      emailID: emailIDInput,
    })),
  setEmailDomain: (emailDomainInput: string) =>
    set(() => ({
      emailDomain: emailDomainInput,
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
