import styled from 'styled-components';

interface footerButtonProps {
  isNextPageEnabled: boolean;
  title: string;
  onClickButton: () => void;
}
interface footerButtonContainerProps {
  isNextPageEnabled: boolean;
}

function FooterButton({
  isNextPageEnabled = false,
  title = '',
  onClickButton = () => {},
}: footerButtonProps) {
  return (
    <Container>
      <Button
        disabled={!isNextPageEnabled}
        isNextPageEnabled={isNextPageEnabled}
        onClick={onClickButton}
      >
        {title}
      </Button>
    </Container>
  );
}

export default FooterButton;

const Container = styled.div`
  padding: 0 1.625rem 3.125rem;
  background-color: ${(props) => props.theme.colors.Gray01};
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Button = styled.button<footerButtonContainerProps>`
  border: none;
  background-color: ${(props) =>
    props.isNextPageEnabled ? props.theme.colors.PrimaryPurple09 : props.theme.colors.Gray04};
  border-radius: 6px;
  color: ${(props) =>
    props.isNextPageEnabled ? props.theme.colors.White : props.theme.colors.Gray05};
  width: 100%;

  font-family: Apple SD Gothic Neo, sans-serif;
  padding: 0.815rem 0;

  font-size: 1rem;
`;
