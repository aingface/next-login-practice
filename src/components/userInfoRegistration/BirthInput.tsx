import { themes } from '@styles/themes';
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
  const handleOnChangeYear = (event: React.ChangeEvent<HTMLInputElement>) => {
    const yearInputValue = event.target.value;
    const formattedYearValue = Number(yearInputValue.slice(0, 4));

    if (formattedYearValue === 0) {
      setYear(undefined);
    } else {
      setYear(formattedYearValue);
    }
  };
  const handleOnChangeMonth = (event: React.ChangeEvent<HTMLInputElement>) => {
    const monthInputValue = event.target.value;
    const formattedMonthValue = Number(monthInputValue.slice(0, 2));

    if (formattedMonthValue === 0) {
      setMonth(undefined);
    } else {
      setMonth(formattedMonthValue);
    }
  };
  const handleOnChangeDay = (event: React.ChangeEvent<HTMLInputElement>) => {
    const dayInputValue = event.target.value;
    const formattedDayValue = Number(dayInputValue.slice(0, 2));

    if (formattedDayValue === 0) {
      setDay(undefined);
    } else {
      setDay(formattedDayValue);
    }
  };

  return (
    <BirthWrapper>
      <Text fontWeight={themes.fontWeights.bold}>생년월일</Text>
      <BirthInputFieldWrapper>
        <InputField
          flex={4}
          max={9999}
          placeholder="YYYY"
          type="number"
          value={year}
          onChange={handleOnChangeYear}
        />
        <InputField
          flex={3}
          placeholder="MM"
          type="number"
          value={month}
          onChange={handleOnChangeMonth}
        />
        <InputField
          flex={3}
          placeholder="DD"
          type="number"
          value={day}
          onChange={handleOnChangeDay}
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
`;
