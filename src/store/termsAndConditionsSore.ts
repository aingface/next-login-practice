import { create } from 'zustand';

interface termsAndConditionsProps {
  policy: string;
  location: string;
  privacy: string;
  marketing: string;
  personal: string;

  setTermsAndConditions: (data: termsAndConditionsProps) => void;
}

const termsAndConditionsStore = create<termsAndConditionsProps>()((set) => ({
  policy: '',
  location: '',
  privacy: '',
  marketing: '',
  personal: '',

  setTermsAndConditions: (data: termsAndConditionsProps) =>
    set(() => ({
      policy: data.policy,
      location: data.location,
      privacy: data.privacy,
      personal: data.personal,
      marketing: data.marketing,
    })),
}));

export default termsAndConditionsStore;
