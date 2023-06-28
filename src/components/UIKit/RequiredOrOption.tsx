import styled from 'styled-components';

interface RequiredOrOptionProps {
  isRequired: boolean;
}
interface ContainerProps {
  isRequired: boolean;
}

function RequiredOrOption({ isRequired = false }: RequiredOrOptionProps) {
  if (isRequired) {
    return (
      <Container isRequired={true}>
        <TextWrapper>{'(필수)'}</TextWrapper>
      </Container>
    );
  }

  return (
    <Container isRequired={false}>
      <TextWrapper>{'(선택)'}</TextWrapper>
    </Container>
  );
}

export default RequiredOrOption;

const Container = styled.div<ContainerProps>`
  color: ${(props) =>
    props.isRequired ? props.theme.colors.SecondaryGreen : props.theme.colors.Gray07};
  font-family: Apple SD Gothic Neo, sans-serif;
  font-size: 1rem;
`;

const TextWrapper = styled.span`
  margin-left: 0.3rem;
`;
