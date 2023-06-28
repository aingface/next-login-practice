import { themes } from '@styles/themes';
import styled from 'styled-components';
interface InputFieldProps {
  flex?: number;
}

interface TextProps {
  fontWeight?: number | string;
  color?: string;
}

interface EmailInputProps {
  email: string | undefined;
  setEmail: (emailDomainInput: string) => void;
  isEmailValid: boolean | undefined;
}

function EmailInput({
  email = '',
  setEmail = () => {},
  isEmailValid = undefined,
}: EmailInputProps) {
  const handleEmailInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const renderIsEmailValid = () => {
    if (isEmailValid === undefined || email.length <= 0) {
      return <Text color={themes.colors.Black01}>{'이메일을 입력해주세요'}</Text>;
    } else if (isEmailValid === true) {
      return <Text color={themes.colors.PrimaryPurple09}>{'이메일 형식이 올바릅니다.'}</Text>;
    }

    return <Text color={themes.colors.Red}>{'이메일 형식이 맞지 않습니다.'}</Text>;
  };

  return (
    <EmailWrapper>
      <Text fontWeight={themes.fontWeights.bold}>이메일</Text>
      <EmailInputFieldWrapper>
        <InputField
          placeholder="이메일 주소 입력"
          type="email"
          value={email}
          onChange={handleEmailInputChange}
        />
        {renderIsEmailValid()}
      </EmailInputFieldWrapper>
    </EmailWrapper>
  );
}

export default EmailInput;

const EmailWrapper = styled.div`
  flex-direction: column;
  width: 100%;
  padding: 2rem 1.625rem 0;
`;

const EmailInputFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0.5rem 0;
  width: 100%;
`;

const InputField = styled.input<InputFieldProps>`
  flex: ${(props) => props.flex};
  padding: 0.6875rem 1rem;
  border: 1px solid ${(props) => props.theme.colors.Gray02};
  border-radius: 6px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.White};
  outline-color: ${(props) => props.theme.colors.PrimaryPurple09};
`;

const Text = styled.span<TextProps>`
  font-size: 1rem;
  font-weight: ${(props) => props.fontWeight};
  font-family: Apple SD Gothic Neo, sans-serif;
  color: ${(props) => (props.color === undefined ? props.theme.colors.Black : props.color)};
`;
