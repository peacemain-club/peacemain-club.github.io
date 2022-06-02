import {useFormik} from 'formik';
import Link from 'next/link';

import Button from 'components/button';
import Input from 'components/input';
import TextArea from 'components/textarea';
import Radio from 'components/radio';
import Checkbox from 'components/checkbox';

import {apply_schema} from 'validators';

import * as S from './style';

const PRIVACY_TERM_URL = 'https://aaa.com';

function TermStatement() {
  return (
    <S.TermStatement>
      <Link href={PRIVACY_TERM_URL} passHref>
        <S.Link>개인정보처리방침</S.Link>
      </Link>
      에 동의합니다.
    </S.TermStatement>
  );
}

function Apply() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      major: '',
      position: '',
      statement: '',
      is_term_agreed: [],
    },
    validationSchema: apply_schema,
    onSubmit: data => {
      if (data.is_term_agreed) {
        console.log(data);
      }
    },
  });

  return (
    <S.Container onSubmit={formik.handleSubmit}>
      <Input
        id="name"
        name="name"
        label="이름"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <Input
        id="email"
        name="email"
        type="email"
        label="이메일"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <Input
        id="major"
        name="major"
        label="학과/부"
        value={formik.values.major}
        onChange={formik.handleChange}
        error={formik.touched.major && Boolean(formik.errors.major)}
        helperText={formik.touched.major && formik.errors.major}
      />
      <>
        <Radio
          id="position"
          name="position"
          title="희망트랙"
          labels={['프론트엔드 교육', '웹 프로젝트', '커뮤니티 매니저']}
          value={formik.values.position}
          onChange={formik.handleChange}
          error={formik.touched.position && Boolean(formik.errors.position)}
          helperText={formik.touched.position && formik.errors.position}
        />
        <TextArea
          id="statement"
          name="statement"
          label="자기소개"
          placeholder="자기소개는 50자 이상 1000자 미만으로 입력해주세요."
          value={formik.values.statement}
          onChange={formik.handleChange}
          error={formik.touched.statement && Boolean(formik.errors.statement)}
          helperText={formik.touched.statement && formik.errors.statement}
        />
        <Checkbox
          id="is_term_agreed"
          name="is_term_agreed"
          label={<TermStatement />}
          placeholder="개인정보처리방침에 동의가 필요합니다."
          value="1"
          onChange={formik.handleChange}
          error={formik.touched.is_term_agreed && Boolean(formik.errors.is_term_agreed)}
          helperText={formik.touched.is_term_agreed && '개인정보처리방침에 동의해주세요.'}
        />
        <Button text="지원하기" variant="large" type="submit" />
      </>
    </S.Container>
  );
}

export default Apply;
