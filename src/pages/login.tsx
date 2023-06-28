import jwtStore from '@store/jwtStore';
import { themes } from '@styles/themes';
import axios from 'axios';
// import jwt from 'jsonwebtoken';
import { useRouter } from 'next/router';
import { ChangeEvent, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import styled from 'styled-components';
interface AuthButtonProps {
  backgroundColor?: string;
}

function LogIn() {
  const router = useRouter();
  const [emailInput, setEmailInput] = useState<string>('');
  const [passwordInput, setPasswordInput] = useState<string>('');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies();

  const { jwt, setJwt } = jwtStore();

  useEffect(() => {
    if (isLoggedIn) {
      router.push('./notice');
    }
  }, [isLoggedIn]);

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(emailInput));
  };

  const handleEmailInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailInput(event.target.value);
    validateEmail();
  };

  const handlePassWordInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(event.target.value);
  };

  const handleOnClickSignUp = () => {
    router.push('./termsAndConditions');
  };

  const onClickLogIn = async () => {
    const inputValue = {
      email: emailInput,
      password: passwordInput,
    };

    try {
      const result = await axios.post('http://localhost:3333/login', inputValue);

      const token = result.data.accessToken;

      // const verified = jwt.verify(token, 'blue_ant');
      setJwt(token);
      setCookie('verified-accessToken', token, { path: '/' });

      if (result.data.accessToken) {
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.log('🔥에러🔥', error);
    }
  };

  const errorMessage = () => {
    if (emailInput && !isEmailValid) {
      return <ErrorMessage>이메일 형식이 맞지 않습니다.</ErrorMessage>;
    }
    return <div></div>;
  };

  return (
    <Container>
      <Description>
        <span>
          직접
          <br />
          <Bold>로그인</Bold>을<br />
          구현해봅시다
        </span>
      </Description>
      <LogInFormWrapper>
        <InputFeild
          placeholder="이메일을 입력해주세요."
          type="email"
          value={emailInput}
          onChange={handleEmailInputChange}
        />
        <InputFeild
          placeholder="비밀번호를 입력해주세요."
          type="password"
          value={passwordInput}
          onChange={handlePassWordInputChange}
        />
        {errorMessage()}
      </LogInFormWrapper>
      <AuthButtonWrapper>
        <AuthButton
          backgroundColor={themes.colors.PrimaryPurple09}
          color={themes.colors.White}
          onClick={onClickLogIn}
        >
          <span>로그인하기</span>
        </AuthButton>
        <AuthButton
          backgroundColor={'transparent'}
          color={themes.colors.PrimaryPurple09}
          onClick={handleOnClickSignUp}
        >
          <span>이메일로 가입하기</span>
        </AuthButton>
      </AuthButtonWrapper>
    </Container>
  );
}

export default LogIn;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.Gray01};
  width: 100%;
  height: 100%;
  padding: 0 1.625rem;
`;

const Description = styled.div`
  font-family: Apple SD Gothic Neo, sans-serif;
  font-size: 2rem;
  font-weight: ${(props) => props.theme.fontWeights.light};
  padding-top: 2rem;
  width: 100%;
  margin-top: 8rem;
`;

const Bold = styled.span`
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

const LogInFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  width: 100%;
`;

const InputFeild = styled.input`
  margin-top: 0.7rem;
  font-family: Apple SD Gothic Neo, sans-serif;
  font-size: 1rem;
  padding: 1rem;
  border: 1px solid ${(props) => props.theme.colors.Gray02};
  border-radius: 6px;
  outline-color: ${(props) => props.theme.colors.PrimaryPurple09};

  &::placeholder {
    color: ${(props) => props.theme.colors.Gray03};
  }
`;

const AuthButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const AuthButton = styled.button<AuthButtonProps>`
  padding: 1rem;
  margin-top: 0.7rem;
  border: 1px solid ${(props) => props.theme.colors.PrimaryPurple09};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  font-family: Apple SD Gothic Neo, sans-serif;
  border-radius: 999px;
  font-size: 1rem;
`;

const ErrorMessage = styled.p`
  padding: 0.3rem;
  color: ${(props) => props.theme.colors.Red};
  font-size: 1rem;
`;
