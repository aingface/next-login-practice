import FooterButton from '@components/UIKit/FooterButton';
import NavigationBar from '@components/UIKit/NavigationBar';
import BirthInput from '@components/userInfoRegistration/BirthInput';
import EmailInput from '@components/userInfoRegistration/EmailInput';
import PasswordInput from '@components/userInfoRegistration/PasswordInput';
import signInUserInfomationStore from '@store/signInUserInfomationStore';
import styled from 'styled-components';

function UserInfoRegistration() {
  const { year, month, day, setYear, setMonth, setDay } = signInUserInfomationStore();
  const { emailID, emailDomain, setEmailID, setEmailDomain } = signInUserInfomationStore();
  const { password, passwordRepeat, setPassword, setPasswordRepeat } = signInUserInfomationStore();

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
      <FooterButton isNextPageEnabled={true} title="가입하기" onClickButton={() => {}} />
    </Container>
  );
}

export default UserInfoRegistration;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.Gray01};
  width: 100%;
  height: 100vh;
`;
