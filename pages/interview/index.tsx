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
      date: '20220509',
      times: [
        {time: '2022-05-09T10:00:00.000Z', isReserved: false, isMine: false},
        {time: '2022-05-09T10:30:00.000Z', isReserved: false, isMine: false},
        {time: '2022-05-09T11:00:00.000Z', isReserved: true, isMine: true},
        {time: '2022-05-09T11:30:00.000Z', isReserved: false, isMine: false},
        {time: '2022-05-09T12:00:00.000Z', isReserved: true, isMine: false},
      ],
    },
    {
      date: '20220510',
      times: [
        {time: '2022-05-10T10:00:00.000Z', isReserved: false, isMine: false},
        {time: '2022-05-10T10:30:00.000Z', isReserved: false, isMine: false},
        {time: '2022-05-10T11:00:00.000Z', isReserved: false, isMine: false},
        {time: '2022-05-10T11:30:00.000Z', isReserved: false, isMine: false},
        {time: '2022-05-10T12:00:00.000Z', isReserved: false, isMine: false},
      ],
    },
    {
      date: '20220511',
      times: [
        {time: '2022-05-11T10:00:00.000Z', isReserved: false, isMine: false},
        {time: '2022-05-11T10:30:00.000Z', isReserved: false, isMine: false},
        {time: '2022-05-11T11:00:00.000Z', isReserved: false, isMine: false},
        {time: '2022-05-11T11:30:00.000Z', isReserved: false, isMine: false},
        {time: '2022-05-11T12:00:00.000Z', isReserved: false, isMine: false},
      ],
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
