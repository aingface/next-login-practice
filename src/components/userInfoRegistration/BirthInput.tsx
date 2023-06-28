import { themes } from '@styles/themes';
import { formatDate } from '@utils';
import styled from 'styled-components';

interface InputFieldProps {
  flex?: number;
}

interface TextProps {
  fontWeight?: number | string;
}

interface BirthInputProps {
  year: number | undefined;
  month: number | undefined;
  day: number | undefined;

  setYear: (yearInput: number | undefined) => void;
  setMonth: (monthInput: number | undefined) => void;
  setDay: (dayInput: number | undefined) => void;
}

function BirthInput({
  year = undefined,
  month = undefined,
  day = undefined,
  setYear = () => {},
  setMonth = () => {},
  setDay = () => {},
}: BirthInputProps) {
  const handleOnChangeBirthDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const dateString = event.target.value;

    const [inputYear, inputMonth, inputDate] = dateString.split('-').map((item) => Number(item));
    setYear(inputYear);
    setMonth(inputMonth);
    setDay(inputDate);
  };

  const FormattedBirthDate = formatDate(year, month, day);

  return (
    <BirthWrapper>
      <Text fontWeight={themes.fontWeights.bold}>생년월일</Text>
      <BirthInputFieldWrapper>
        <InputField
          flex={4}
          placeholder="YYYY-MM-DD"
          type="date"
          value={FormattedBirthDate}
          onChange={handleOnChangeBirthDate}
        />
      </BirthInputFieldWrapper>
    </BirthWrapper>
  );
}

export default BirthInput;

const BirthWrapper = styled.div`
  flex-direction: column;
  width: 100%;
  padding: 1.5rem 1.625rem 0;
`;
const BirthInputFieldWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  padding: 0.5rem 0;
  width: 100%;
`;

const Text = styled.span<TextProps>`
  font-size: 1rem;
  font-weight: ${(props) => props.fontWeight};
  font-family: Apple SD Gothic Neo, sans-serif;
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
