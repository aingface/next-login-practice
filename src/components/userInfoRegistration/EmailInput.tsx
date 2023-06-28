import { themes } from '@styles/themes';
import styled from 'styled-components';
interface InputFieldProps {
  flex?: number;
}

interface TextProps {
  fontWeight?: number | string;
}

interface EmailInputProps {
  email: string | undefined;
  setEmail: (emailDomainInput: string) => void;
}

function EmailInput({ email = '', setEmail = () => {} }: EmailInputProps) {
  const handleEmailInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
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
  flex-direction: row;
  gap: 0.75rem;
  padding: 0.5rem 0;
  width: 100%;
  align-items: center;
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
`;
