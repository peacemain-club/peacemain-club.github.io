import {useState} from 'react';

import Layout from 'components/layout';
import ThirdBanner from 'components/banners/3rd-banner';
import InterviewScheduler from 'components/forms/interview-scheduler';
import Modal from 'components/modal';
import AuthForm from 'components/forms/auth';

import * as S from './style';

import type {NextPage} from 'next';
import type {Schedule} from 'components/forms/interview-scheduler';

const Apply: NextPage = () => {
  const [isModalOpened, setIsModalOpened] = useState(true);

  const handleModalClose = () => {
    setIsModalOpened(false);
  };

  const schedule: Schedule[] = [
    {
      title: '5월 9일(월)',
      times: [{time: '12:00'}],
    },
  ];

  return (
    <Layout>
      <Modal opened={isModalOpened}>
        <Modal.Title>본인확인</Modal.Title>
        <Modal.Body>
          <AuthForm onSubmit={handleModalClose} />
        </Modal.Body>
      </Modal>
      <S.Page>
        <S.BannerSection>
          <ThirdBanner />
        </S.BannerSection>
        <S.Main>
          <S.MainSection>
            <S.MainSectionTitleWrapper>
              <S.MainSectionTitle>면접일정등록</S.MainSectionTitle>
            </S.MainSectionTitleWrapper>
            {!isModalOpened && <InterviewScheduler schedule={schedule} />}
          </S.MainSection>
        </S.Main>
      </S.Page>
    </Layout>
  );
};

export default Apply;
