export const checkIsAgreeAll = (
  isPolicyAgree: boolean,
  isLocationAgree: boolean,
  isPrivacyAgree: boolean,
  isMarketingAgree: boolean,
  isPersonalAgree: boolean,
): boolean => {
  if (isPolicyAgree && isLocationAgree && isPrivacyAgree && isMarketingAgree && isPersonalAgree) {
    return true;
  }
  return false;
};

export const checkIsRequiredConditionsMet = (
  isPolicyAgree: boolean,
  isLocationAgree: boolean,
  isPrivacyAgree: boolean,
) => {
  if (isPolicyAgree && isLocationAgree && isPrivacyAgree) {
    return true;
  }
  return false;
};
