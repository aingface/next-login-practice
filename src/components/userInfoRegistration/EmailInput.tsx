import { themes } from '@styles/themes';
import { useState } from 'react';
import styled from 'styled-components';
interface InputFieldProps {
  flex?: number;
}

interface TextProps {
  fontWeight?: number | string;
}

interface Option {
  value: string;
  label: string;
}

interface EmailInputProps {
  emailID: string | undefined;
  emailDomain: string | undefined;
  setEmailID: (emailIDInput: string) => void;
  setEmailDomain: (emailDomainInput: string) => void;
}

const options: Option[] = [
  { value: 'gmail.com', label: 'gmail.com' },
  { value: 'naver.com', label: 'naver.com' },
  { value: 'daum.net', label: 'daum.net' },
  { value: 'outlook.com', label: 'outlook.com' },
];

function EmailInput({
  emailID = '',
  emailDomain = '',
  setEmailID = () => {},
  setEmailDomain = () => {},
}: EmailInputProps) {
  const handleEmailIDChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailID(event.target.value);
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setEmailDomain(event.target.value);
  };

  return (
    <EmailWrapper>
      <Text fontWeight={themes.fontWeights.bold}>이메일</Text>
      <EmailInputFieldWrapper>
        <InputField
          flex={1}
          placeholder="이메일"
          type="text"
          value={emailID}
          onChange={handleEmailIDChange}
        />
        <Text>{'@'}</Text>
        <EmailSelect value={emailDomain} onChange={handleOptionChange}>
          {[
            <option key="placeholder" value="">
              <Text>선택</Text>
            </option>,
            ...options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            )),
          ]}
        </EmailSelect>
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

const EmailSelect = styled.select`
  flex: 1.582;
  padding: 0.6875rem 1rem;
  border: 1px solid ${(props) => props.theme.colors.Gray02};
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.White};
  outline-color: ${(props) => props.theme.colors.PrimaryPurple09};
`;

const Text = styled.span<TextProps>`
  font-size: 1rem;
  font-weight: ${(props) => props.fontWeight};
  font-family: Apple SD Gothic Neo, sans-serif;
`;
