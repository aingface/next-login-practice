import { create } from 'zustand';
interface termsAndConditionsAgreeState {
  isPolicyAgree: boolean;
  isPrivacyAgree: boolean;
  isLocationAgree: boolean;
  isPersonalAgree: boolean;
  isMarketingAgree: boolean;

  toggleIsPolicyAgree: () => void;
  toggleIsPrivacyAgree: () => void;
  toggleIsLocationAgree: () => void;
  toggleIsPersonalAgree: () => void;
  toggleIsMarketingAgree: () => void;

  setAgreeAll: () => void;
  setDisagreeAll: () => void;
}

const termsAndConditionsAgreeStore = create<termsAndConditionsAgreeState>()((set) => ({
  isPolicyAgree: false,
  isLocationAgree: false,
  isPrivacyAgree: false,
  isMarketingAgree: false,
  isPersonalAgree: false,
  isAgreeAll: false,

  setAgreeAll: () =>
    set(() => ({
      isPolicyAgree: true,
      isLocationAgree: true,
      isPrivacyAgree: true,
      isMarketingAgree: true,
      isPersonalAgree: true,
    })),

  setDisagreeAll: () =>
    set(() => ({
      isPolicyAgree: false,
      isLocationAgree: false,
      isPrivacyAgree: false,
      isMarketingAgree: false,
      isPersonalAgree: false,
    })),

  toggleIsPolicyAgree: () =>
    set((state) => ({
      isPolicyAgree: !state.isPolicyAgree,
    })),
  toggleIsPrivacyAgree: () =>
    set((state) => ({
      isPrivacyAgree: !state.isPrivacyAgree,
    })),
  toggleIsLocationAgree: () =>
    set((state) => ({
      isLocationAgree: !state.isLocationAgree,
    })),
  toggleIsPersonalAgree: () =>
    set((state) => ({
      isPersonalAgree: !state.isPersonalAgree,
    })),
  toggleIsMarketingAgree: () =>
    set((state) => ({
      isMarketingAgree: !state.isMarketingAgree,
    })),
}));

export default termsAndConditionsAgreeStore;
