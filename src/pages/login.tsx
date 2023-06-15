import logo from '@assets/logos/logo.png';
import NavigationBar from '@components/UIKit/NavigationBar';
import { themes } from '@styles/themes';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

interface AuthButtonProps {
  backgroundColor?: string;
  // 다른 프로퍼티들도 필요한 경우 여기에 추가
}

function LogIn() {
  return (
    <Wrapper>
      <NavigationBar />
      <LogoBox>
        <Image alt="My logo" height={45} src={logo} width={45} />
      </LogoBox>
      <Description>
        <span>
          올라케어의 특별한 <br />
          <Bold>올인원 건강관리</Bold>를<br />
          경험해 보세요!
        </span>
      </Description>
      <LogInFormWrapper>
        <InputFeild placeholder="이메일을 입력해주세요." type="email" />
        <InputFeild placeholder="비밀번호를 입력해주세요." type="password" />
        {/* <ErrorMessage>일치하는 이메일과 비밀번호 조합이 없습니다.</ErrorMessage> */}
      </LogInFormWrapper>
      <AuthButtonWrapper>
        <AuthButton backgroundColor={themes.colors.PrimaryPurple09} color={themes.colors.White}>
          <span>로그인하기</span>
        </AuthButton>
        <AuthButton backgroundColor={'transparent'} color={themes.colors.PrimaryPurple09}>
          <span>이메일로 가입하기</span>
        </AuthButton>
      </AuthButtonWrapper>
    </Wrapper>
  );
}

export default LogIn;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.Gray01};
  padding: 0 7vw;
  width: 100vw;
  height: 100%;
`;

const LogoBox = styled.div`
  padding-top: 2rem;
`;

const Description = styled.div`
  font-family: Apple SD Gothic Neo, sans-serif;
  font-size: 2rem;
  font-weight: ${(props) => props.theme.fontWeights.light};
  padding-top: 2rem;
`;

const Bold = styled.span`
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

const LogInFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
`;

const InputFeild = styled.input`
  margin-top: 0.7rem;
  font-family: Apple SD Gothic Neo, sans-serif;
  font-size: 1rem;
  padding: 1rem;
  border: 1px solid ${(props) => props.theme.colors.Gray02};
  border-radius: 6px;

  &::placeholder {
    color: ${(props) => props.theme.colors.Gray03};
  }

  &:focus {
    border-color: ${(props) => props.theme.colors.PrimaryPurple09};
    /* 다른 스타일도 추가적으로 지정할 수 있습니다 */
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
