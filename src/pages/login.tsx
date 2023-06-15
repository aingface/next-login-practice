import NavigationBar from '@components/UIKit/NavigationBar';
import React from 'react';
import styled from 'styled-components';

function LogIn() {
  return (
    <Container>
      <NavigationBar />
    </Container>
  );
}

export default LogIn;

const Container = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.White};
`;
