import arrowLeft from '@assets/icons/icon_arrow-left.png';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

function NavigationBar() {
  const router = useRouter();
  const handleOnClickBackBtn = () => router.back();
  return (
    <Container>
      <BackButton onClick={handleOnClickBackBtn}>
        <Image alt="My Image" height={24} src={arrowLeft} width={24} />
      </BackButton>
    </Container>
  );
}

export default NavigationBar;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 15vh;
  width: 100vw;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: transparent;
  box-shadow: none;
  &:active {
    /* 눌렸을 때의 스타일 지정 */
    /* 예: 배경색 변경, 박스 그림자 추가 등 */
    background-color: ${(props) => props.theme.colors.Gray01};
  }
`;
