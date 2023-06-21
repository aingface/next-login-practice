import arrowLeft from '@assets/icons/icon_arrow-left.png';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';

interface NavigationBarProps {
  title?: string;
  isBorderBottom?: boolean;
}

interface ContainerProps {
  isBorderBottom?: boolean;
}

function NavigationBar({ title = '', isBorderBottom = false }: NavigationBarProps) {
  const router = useRouter();
  const handleOnClickBackBtn = () => router.back();
  return (
    <Container isBorderBottom={isBorderBottom}>
      <BackButton onClick={handleOnClickBackBtn}>
        <Image alt="My Image" height={24} src={arrowLeft} width={24} />
      </BackButton>
      <TitleWrapper>
        <Title>{title}</Title>
      </TitleWrapper>
    </Container>
  );
}

export default NavigationBar;

const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding-top: 7vh;
  padding-bottom: 1vh;
  width: 100vw;
  border-bottom: 1px solid ${(props) => (props.isBorderBottom ? props.theme.colors.Gray04 : 'none')};
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Title = styled.span`
  font-size: 1.2rem;
  font-family: Apple SD Gothic Neo, sans-serif;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.Black};
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: transparent;
  box-shadow: none;
  position: absolute;
  left: 1rem;

  &:active {
    /* 눌렸을 때의 스타일 지정 */
    /* 예: 배경색 변경, 박스 그림자 추가 등 */
    background-color: ${(props) => props.theme.colors.Gray01};
  }
`;
