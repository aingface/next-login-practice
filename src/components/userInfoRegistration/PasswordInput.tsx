import eyeOff from '@assets/icons/icon_eye_off_fill.png';
import eyeOn from '@assets/icons/icon_eye_on_fill.png';
import { themes } from '@styles/themes';
import { validatePassword } from '@utils';
import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';
interface TextProps {
  fontWeight?: number | string;
  color?: string;
}

interface PasswordInputProps {
  password: string | undefined;
  passwordRepeat: string | undefined;
  setPassword: (password: string | undefined) => void;
  setPasswordRepeat: (password: string | undefined) => void;
}

interface PasswordInputFieldProps {
  isInvalid?: boolean;
}

function PasswordInput({
  password = '',
  passwordRepeat = '',
  setPasswordRepeat = () => {},
  setPassword = () => {},
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPasswordRepeat, setShowPasswordRepeat] = useState<boolean>(false);
  const [isPasswordInvalid, setIsPasswordInvalid] = useState<boolean>(false);
  const [isPasswordRepeatInvalid, setIsPasswordRepeatInvalid] = useState<boolean>(false);

  const handleOnChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setPassword(input);

    if (validatePassword(input) || input === undefined || input.length <= 0) {
      setIsPasswordInvalid(false);
    } else {
      setIsPasswordInvalid(true);
    }
  };
  const handleOnChangePasswordRepeat = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;

    setPasswordRepeat(input);

    if (password === input || input === undefined || input.length <= 0) {
      setIsPasswordRepeatInvalid(false);
    } else {
      setIsPasswordRepeatInvalid(true);
    }
  };

  const handleOnClickPasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleOnClickPasswordRepeatVisibility = () => {
    setShowPasswordRepeat(!showPasswordRepeat);
  };

  const passwordVisibilityImage = (state: boolean, handleOnClick: () => void) => {
    if (state) {
      return (
        <PasswordVisibilityWrapper>
          <PasswordVisibilityToggleButton onClick={handleOnClick}>
            <Image alt="개안" src={eyeOn} width={24}></Image>
          </PasswordVisibilityToggleButton>
        </PasswordVisibilityWrapper>
      );
    }

    return (
      <PasswordVisibilityWrapper>
        <PasswordVisibilityToggleButton onClick={handleOnClick}>
          <Image alt="폐안" src={eyeOff} width={24}></Image>
        </PasswordVisibilityToggleButton>
      </PasswordVisibilityWrapper>
    );
  };

  const renderPasswordVisibilityImage = () => {
    return passwordVisibilityImage(showPassword, handleOnClickPasswordVisibility);
  };

  const renderPasswordRepeatVisibilityImage = () => {
    return passwordVisibilityImage(showPasswordRepeat, handleOnClickPasswordRepeatVisibility);
  };

  const renderPasswordValidationGuide = () => {
    if (password === undefined || password.length <= 0) {
      return <Text>{'영문,숫자,특수문자 조합 8~20자'}</Text>;
    }

    const validationResult = validatePassword(password);

    if (validationResult === true) {
      return <Text color={themes.colors.PrimaryPurple09}>{'사용가능한 비밀번호입니다.'}</Text>;
    }

    return (
      <Text color={themes.colors.Red}>{'영문,숫자,특수문자 조합 8~20자를 입력해주세요.'}</Text>
    );
  };

  const renderPasswordReatValidationGuide = () => {
    if (passwordRepeat === undefined || passwordRepeat.length <= 0) {
      return <></>;
    }
    if (password === passwordRepeat) {
      return <Text color={themes.colors.PrimaryPurple09}>{'비밀번호가 일치합니다.'}</Text>;
    }
    return <Text color={themes.colors.Red}>{'비밀번호가 일치하지 않습니다.'}</Text>;
  };

  return (
    <PasswordWrapper>
      <Text fontWeight={themes.fontWeights.bold}>비밀번호</Text>
      <PasswordInputFieldWrapper>
        <PasswordInputBoxWrapper>
          <PasswordInputField
            isInvalid={isPasswordInvalid}
            placeholder="비밀번호 입력"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={handleOnChangePassword}
          />
          {renderPasswordVisibilityImage()}
        </PasswordInputBoxWrapper>
        {renderPasswordValidationGuide()}
        <PasswordInputBoxWrapper>
          <PasswordInputField
            isInvalid={isPasswordRepeatInvalid}
            placeholder="비밀번호 재입력"
            type={showPasswordRepeat ? 'text' : 'password'}
            value={passwordRepeat}
            onChange={handleOnChangePasswordRepeat}
          />
          {renderPasswordRepeatVisibilityImage()}
        </PasswordInputBoxWrapper>
        {renderPasswordReatValidationGuide()}
      </PasswordInputFieldWrapper>
    </PasswordWrapper>
  );
}

export default PasswordInput;

const PasswordWrapper = styled.div`
  flex-direction: column;
  width: 100%;
  padding: 1.5rem 1.625rem 0;
`;
const PasswordInputFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0.5rem 0;
  width: 100%;
`;
const PasswordInputBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid ${(props) => props.theme.colors.Gray02};
  border-radius: 6px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.White};
`;
const PasswordInputField = styled.input<PasswordInputFieldProps>`
  padding: 0.6875rem 1rem;
  border: none;
  width: 100%;
  background-color: ${(props) => props.theme.colors.White};
  outline-color: ${(props) =>
    props.isInvalid ? props.theme.colors.Red : props.theme.colors.PrimaryPurple09};
`;

const PasswordVisibilityWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 1rem;
`;

const PasswordVisibilityToggleButton = styled.button`
  border: none;
  background-color: transparent;
`;

const Text = styled.span<TextProps>`
  font-size: 1rem;
  font-weight: ${(props) => props.fontWeight};
  font-family: Apple SD Gothic Neo, sans-serif;
  color: ${(props) => (props.color === undefined ? props.theme.colors.Black : props.color)};
`;
