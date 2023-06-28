// export * from './getUsersDB';
import { formatDate } from './birthInputUtils';
import { checkIsAgreeAll, checkIsRequiredConditionsMet } from './termsAndConditionsUtils';
import {
  checkIsRegisterValuesValid,
  validateEmail,
  validatePassword,
} from './userInfoRegistrationUtils';

export { checkIsAgreeAll, checkIsRequiredConditionsMet };
export { checkIsRegisterValuesValid, validateEmail, validatePassword };
export { formatDate };
