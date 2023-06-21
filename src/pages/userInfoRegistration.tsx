import FooterButton from '@components/UIKit/FooterButton';
import NavigationBar from '@components/UIKit/NavigationBar';
import BirthInput from '@components/userInfoRegistration/BirthInput';
import EmailInput from '@components/userInfoRegistration/EmailInput';
import PasswordInput from '@components/userInfoRegistration/PasswordInput';
import signInUserInfomationStore from '@store/signInUserInfomationStore';
import { validateEmail, validatePassword } from '@utils';
import axios from 'axios';
import { useRouter } from 'next/router';
import styled from 'styled-components';

function UserInfoRegistration() {
  const router = useRouter();

  const { year, month, day, setYear, setMonth, setDay } = signInUserInfomationStore();
  const { emailID, emailDomain, setEmailID, setEmailDomain } = signInUserInfomationStore();
  const { password, passwordRepeat, setPassword, setPasswordRepeat } = signInUserInfomationStore();

  const checkRegisterValid = () => {
    const isYearValid = typeof year == 'number' && year > 0;
    const isMonthValid = typeof month == 'number' && month > 0;
    const isDayValid = typeof day == 'number' && day > 0;

    const isEmailValid = validateEmail(emailID + '@' + emailDomain);
    const isPasswordValid =
      password !== undefined && validatePassword(password) && password === passwordRepeat;

    if (isYearValid && isMonthValid && isDayValid && isEmailValid && isPasswordValid) {
      return true;
    }
    return false;
  };

  const handleOnClickRegister = async () => {
    const registerValue = {
      year: year,
      month: month,
      day: day,
      email: emailID + '@' + emailDomain,
      password: password,
    };
    try {
      const { data } = await axios.post('http://localhost:3333/register', registerValue);

      router.push('./login');
    } catch (error) {
      console.log('error:', error);
    }
  };

  return (
    <Container>
      <NavigationBar isBorderBottom={true} title={'정보입력'} />
      <BirthInput
        day={day}
        month={month}
        setDay={setDay}
        setMonth={setMonth}
        setYear={setYear}
        year={year}
      />
      <EmailInput
        emailDomain={emailDomain}
        emailID={emailID}
        setEmailDomain={setEmailDomain}
        setEmailID={setEmailID}
      />
      <PasswordInput
        password={password}
        passwordRepeat={passwordRepeat}
        setPassword={setPassword}
        setPasswordRepeat={setPasswordRepeat}
      />
      <FooterButton
        isNextPageEnabled={checkRegisterValid()}
        title="가입하기"
        onClickButton={handleOnClickRegister}
      />
    </Container>
  );
}

export default UserInfoRegistration;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.Gray01};
  width: 100%;
  height: 100%;
`;
