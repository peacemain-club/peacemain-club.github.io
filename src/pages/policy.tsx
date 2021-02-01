/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';

const Title = styled.h1``;

const Subtitle = styled.h2``;

const Statement = styled.p``;

function Policy(): React.ReactElement {
  return (
    <main className='background'>
      <Title>개인정보처리방침</Title>
      <Subtitle>제 1조 (목적)</Subtitle>
      <Statement>
        동아리 피스메인(이하 `동아리`라고 함)은 개인정보를 다음의 목적을 위해 처리합니다. 처리한 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며,
        이용 목적이 변경될 시에는 사전 동의를 받을 예정입니다.<br />
        동아리 가입 및 관리 : 동아리 가입 및 동아리 활동을 위한 개인 정보
      </Statement>
      <Subtitle>제 2조 (개인정보의 처리 및 보유기간)</Subtitle>
      <Statement>
        이용자의 개인정보는 원칙적으로 개인정보의 처리 목적이 달성되면 지체없이 파기합니다.<br />
        회원정보<br />
        - 보존항목 : 이름, 휴대폰번호, 생년, 이메일, 관심사, 성별, 지원동기, 전공<br />
        - 보존기간 : 동아리 선발 모집이 끝나는 즉시 삭제 (2021년 3월 1일)<br />
      </Statement>
      <Subtitle>제 3조 (개인정보의 3자 제공)</Subtitle>
      <Statement>
        동아리는 원칙적으로 이용자의 개인정보를 제1조 (목적)에서 명시한 범위 내에서 처리하며, 이용자의 사전 동의 없이 본래의 범위를 초과하여 처리하거나 제3자에게 제공하지 않습니다.<br />
        다만, 다음의 경우는 예외로 처리됩니다.<br />
        - 다른 법률에 특별한 규정이 있는 경우<br />
        - 범죄의 수사와 같이 개인정보 보호법 제 18조 ②에 해당되는 경우<br />
        - 이용자가 사전에 제3자 제공 및 공개에 동의한 경우<br />
        - 서비스의 제공에 관한 계약의 이행을 위하여 필요한 개인정보로서 경제적/기술적인 사유로 통상의 동의를 받는 것이 현저히 곤란한 경우<br />
        - 개인을 식별하기에 특정할 수 없는 상태로 가공하여 이용하는 경우
      </Statement>
      <Subtitle>제 4조 (개인정보의 파기)</Subtitle>
      <Statement>
        동아리는 원칙적으로 개인정보 처리목적이 달성된 경우에는 지체 없이 해당 개인정보를 파기합니다.
        다만, 다른 법률에 따라 보존하여야하는 경우에는 그러하지 않습니다. 파기의 절차, 기한 및 방법은 다음과 같습니다.<br />

        1. 파기절차<br />
        동아리는 파기 사유가 발생한 개인정보(또는 개인정보파일)를 선정하고, 개인정보 보호책임자의 승인을 받아 개인정보(또는 개인정보파일)를 파기합니다.<br />
        2. 파기방법<br />
        동아리는 Google Cloud Platform의 DB데이터 삭제 기능을 통해 개인정보를 파기합니다.<br />
      </Statement>
    </main>
  );
}

export default Policy;
