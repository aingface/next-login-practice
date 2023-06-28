import NavigationBar from '@components/UIKit/NavigationBar';
import styled from 'styled-components';

function notice() {
  return (
    <Container>
      <NavigationBar isBorderBottom={true} title={'알림'} />
      <Description>
        <span>
          로그인에 <br />
          <Bold>성공</Bold>을<br />
          하셨군요<Bold>.</Bold>
        </span>
      </Description>
    </Container>
  );
}

export default notice;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.Gray01};
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  height: fit-content;
  padding: 0 1.625rem;
`;

const Description = styled.div`
  font-family: Apple SD Gothic Neo, sans-serif;
  font-size: 2rem;
  font-weight: ${(props) => props.theme.fontWeights.light};
  padding-top: 2rem;
  width: 100%;

  margin-top: 7rem;
`;

const Bold = styled.span`
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;
