import decreaseFill from '@assets/icons/icon_arrow-decrease_fill.png';
import increaseFill from '@assets/icons/icon_arrow-increase_fill.png';
import checkCircleGray from '@assets/icons/icon_check-circle_fill_Gray.png';
import checkCircleGreen from '@assets/icons/icon_check-circle_fill_SecondaryGreen.png';
import RequiredOrOption from '@components/UIKit/RequiredOrOption';
import Image from 'next/image';
import { CSSProperties, useState } from 'react';
import styled from 'styled-components';

interface disclosureProps {
  containerStyle?: CSSProperties;
  panelStyle?: CSSProperties;
  title?: string;
  content?: string;
  onClickCheckbox?: () => void;
  isAgree?: boolean;
  isRequired?: boolean;
  panelContent?: string;
}

interface containerProps {
  style?: CSSProperties;
}

interface disclosureWrapper {
  isDropDownSelected: boolean;
}

function Disclosure({
  title = '제목',
  containerStyle = { padding: 0 },
  isAgree = false,
  onClickCheckbox = () => {},
  isRequired = false,
  panelContent = '',
}: disclosureProps) {
  const [isDropDownSelected, setisDropDownSelected] = useState<boolean>(false);

  const splitText = panelContent.split('\n');

  const checkCircleSwitch = () => {
    if (isAgree) {
      return (
        <CheckCircleWrapper onClick={onClickCheckbox}>
          <Image alt="My logo" height={22} src={checkCircleGreen} width={22} />
        </CheckCircleWrapper>
      );
    }
    return (
      <CheckCircleWrapper onClick={onClickCheckbox}>
        <Image alt="My logo" height={22} src={checkCircleGray} width={22} />
      </CheckCircleWrapper>
    );
  };

  const handleOnClickDropDown = () => {
    setisDropDownSelected(!isDropDownSelected);
  };

  const panel = () => {
    const panelContentList = splitText.map((item, index) => {
      const pattern = /^제\s\d+조/g;

      if (pattern.test(item)) {
        return <PanelTitle key={index}>{item}</PanelTitle>;
      }
      return <PanelBody key={index}>{item}</PanelBody>;
    });

    if (isDropDownSelected) {
      return <PanelWrapper>{panelContentList}</PanelWrapper>;
    }
    return <></>;
  };

  const dropdownSwitch = () => {
    if (isDropDownSelected) {
      return (
        <DropdownButton onClick={handleOnClickDropDown}>
          <Image alt="드롭다운" height={24} src={increaseFill} width={24} />
        </DropdownButton>
      );
    }
    return (
      <DropdownButton onClick={handleOnClickDropDown}>
        <Image alt="드롭다운" height={24} src={decreaseFill} width={24} />
      </DropdownButton>
    );
  };

  return (
    <Container style={containerStyle}>
      <DisclosureWrapper isDropDownSelected={isDropDownSelected}>
        <TitleLeftWrapper>
          {checkCircleSwitch()}
          {title}
          <RequiredOrOption isRequired={isRequired} />
        </TitleLeftWrapper>
        {dropdownSwitch()}
      </DisclosureWrapper>
      {panel()}
    </Container>
  );
}

export default Disclosure;

const Container = styled.div<containerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${(props) => props.style?.padding};
`;

const DisclosureWrapper = styled.div<disclosureWrapper>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-content: space-between;

  background-color: transparent;
  font-size: 1rem;
  border: none;
  padding: 1rem 0;
  border-bottom: ${(props) =>
    props.isDropDownSelected ? 'none' : `1px solid ${props.theme.colors.Gray02}`};
  font-size: 1rem;
`;

const TitleLeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const DropdownButton = styled.button`
  border: none;
  background-color: transparent;
`;

const PanelWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.Gray01};
  color: ${(props) => props.theme.colors.Gray10};
`;

const PanelTitle = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.Black};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  padding-top: 1.125rem;
  font-family: Apple SD Gothic Neo, sans-serif;
  box-sizing: content-box;
`;

const PanelBody = styled.p`
  font-size: 0.8125rem;
  padding-top: 0.5rem;
  font-family: Apple SD Gothic Neo, sans-serif;
  box-sizing: content-box;
`;

const CheckCircleWrapper = styled.div`
  padding-right: 0.5rem;
`;
