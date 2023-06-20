import checkCircleGray from '@assets/icons/icon_check-circle_fill_Gray.png';
import checkCircleGreen from '@assets/icons/icon_check-circle_fill_SecondaryGreen.png';
import Disclosure from '@components/UIKit/Disclosure';
import FooterButton from '@components/UIKit/FooterButton';
import NavigationBar from '@components/UIKit/NavigationBar';
import RequiredOrOption from '@components/UIKit/RequiredOrOption';
import termsAndConditionsAgreeStore from '@store/termsAndConditionsAgreeStore';
import termsAndConditionsStore from '@store/termsAndConditionsSore';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
interface AgreeAllButtonProps {
  isAgreeAll: boolean;
}

const disclosureStyle = {
  // display: 'flex',
  // justifyContent: 'center',
  padding: '0 1.625rem',
};

function TermsAndConditions() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const { policy, location, privacy, marketing, personal, setTermsAndConditions } =
    termsAndConditionsStore();

  const {
    isPolicyAgree,
    isLocationAgree,
    isPrivacyAgree,
    isMarketingAgree,
    isPersonalAgree,
    isAgreeAll,

    toggleIsPolicyAgree,
    toggleIsPrivacyAgree,
    toggleIsLocationAgree,
    toggleIsPersonalAgree,
    toggleIsMarketingAgree,

    setAgreeAll,
    setDisagreeAll,
    toggleIsAgreeAll,
  } = termsAndConditionsAgreeStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:3333/policy');

        setTermsAndConditions(result.data);

        if (result.status == 200) {
          setIsLoading(false);
          setIsSuccess(true);
        }
      } catch (error) {
        setIsLoading(false);
        setIsSuccess(false);
      }
    };

    fetchData();
  }, []);

  const handleOnClickAgreeAll = () => {
    if (!isAgreeAll) {
      setAgreeAll();
      toggleIsAgreeAll();
    } else {
      setDisagreeAll();

      toggleIsAgreeAll();
    }
  };

  const onClickPolicyAgree = () => {
    toggleIsPolicyAgree();
  };
  const onClickPrivacyAgree = () => {
    toggleIsPrivacyAgree();
  };
  const onClickLocationAgree = () => {
    toggleIsLocationAgree();
  };
  const onClickPersonalAgree = () => {
    toggleIsPersonalAgree();
  };
  const onClickMarketingAgree = () => {
    toggleIsMarketingAgree();
  };

  const isRequiredConditionsMet = () => {
    if (isPolicyAgree && isLocationAgree && isPrivacyAgree) {
      return true;
    }
    return false;
  };

  const checkCircleSwitch = () => {
    if (isAgreeAll) {
      return <Image alt="My logo" height={22} src={checkCircleGreen} width={22} />;
    }
    return <Image alt="My logo" height={22} src={checkCircleGray} width={22} />;
  };

  const handleOnClickNext = () => {
    router.push('./userInfoRegistration');
  };

  return (
    <Container>
      <NavigationBar isBorderBottom={true} title={'약관동의'} />
      <TermsWrapper>
        <span>{'약관동의'}</span>
        <RequiredOrOption isRequired={true} />
      </TermsWrapper>
      <AgreeAlButtonWrapper>
        <AgreeAllButton isAgreeAll={isAgreeAll} onClick={handleOnClickAgreeAll}>
          {checkCircleSwitch()}
          <ButtonText>{'약관 전체 동의하기'}</ButtonText>
        </AgreeAllButton>
      </AgreeAlButtonWrapper>
      <DisclosureWrapper>
        <Disclosure
          containerStyle={disclosureStyle}
          isAgree={isPolicyAgree}
          isRequired={true}
          panelContent={policy}
          title="서비스 이용 약관"
          onClickCheckbox={onClickPolicyAgree}
        />
        <Disclosure
          containerStyle={disclosureStyle}
          isAgree={isPrivacyAgree}
          isRequired={true}
          panelContent={privacy}
          title="개인정보 이용 약관"
          onClickCheckbox={onClickPrivacyAgree}
        />
        <Disclosure
          containerStyle={disclosureStyle}
          isAgree={isLocationAgree}
          isRequired={true}
          panelContent={location}
          title="위치기반 서비스 이용 약관"
          onClickCheckbox={onClickLocationAgree}
        />
        <Disclosure
          containerStyle={disclosureStyle}
          isAgree={isPersonalAgree}
          isRequired={false}
          panelContent={personal}
          title="개인정보 제3자 동의"
          onClickCheckbox={onClickPersonalAgree}
        />
        <Disclosure
          containerStyle={disclosureStyle}
          isAgree={isMarketingAgree}
          isRequired={false}
          panelContent={marketing}
          title={'마케팅 정보 수신'}
          onClickCheckbox={onClickMarketingAgree}
        />
      </DisclosureWrapper>
      <FooterButton
        isNextPageEnabled={isRequiredConditionsMet()}
        title="확인하기"
        onClickButton={handleOnClickNext}
      />
    </Container>
  );
}

export default TermsAndConditions;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.Gray01};
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  height: fit-content;
`;
const TermsWrapper = styled.div`
  font-size: 1rem;
  padding: 1.5rem 1.625rem 0;
  display: flex;
  flex-direction: row;
`;

const AgreeAlButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.5rem 1.625rem 0;
`;

const AgreeAllButton = styled.button<AgreeAllButtonProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;

  background-color: transparent;
  border-radius: 6px;
  font-size: 1rem;
  border: 1px solid
    ${(props) => (props.isAgreeAll ? props.theme.colors.SecondaryGreen : props.theme.colors.Gray04)};
  color: ${(props) =>
    props.isAgreeAll ? props.theme.colors.SecondaryGreen : props.theme.colors.Gray06};
  padding: 0.25rem 0;
`;

const ButtonText = styled.span`
  margin-left: 0.5rem;
`;

const DisclosureWrapper = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 7rem;
`;
