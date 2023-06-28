import NavigationBar from '@components/UIKit/NavigationBar';
import { Tab } from '@headlessui/react';
import jwtStore from '@store/jwtStore';
import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface noticeType {
  type: 'nonFaceTreatment' | 'psychologicalCounseling' | 'community';
}

function Notice() {
  const { jwt } = jwtStore();

  useEffect(() => {
    const fetchNoticeData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/notice');

        console.log('❤️‍🔥❤️‍🔥❤️‍🔥notice', response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNoticeData();
  }, []);

  return (
    <Container>
      <NavigationBar isBorderBottom={false} title={'알림'} />
      {/* <Tab.Group>
        <Tab.List>
          <Tab
            onClick={() => {
              console.log('냥냥');
            }}
          >
            비대면진료
          </Tab>
          <Tab>심리상담</Tab>
          <Tab>커뮤니티</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>Content 1123</Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group> */}
    </Container>
  );
}

export default Notice;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.Gray01};
  /* background-color: darkslategrey; */
  width: 100%;
  height: 100%;
  padding: 0 1.625rem;
`;
