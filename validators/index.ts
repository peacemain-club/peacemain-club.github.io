import * as yup from 'yup';

export const apply_schema = yup.object({
  name: yup
    .string()
    .matches(/^[가-힣]+$/gi, '올바른 이름을 입력해주세요.')
    .min(2, '이름은 2자 이상 입력해주세요.')
    .required('이름을 입력해주세요.'),
  email: yup.string().email('올바른 이메일을 입력해주세요.').required('이메일을 입력해주세요.'),
  major: yup
    .string()
    .matches(/^[가-힣]+$/gi, '학과/부에는 한글만 입력할 수 있습니다.')
    .min(2, '학과/부는 2자 이상 입력해주세요.')
    .required('학과/부를 입력해주세요.'),
  position: yup.string().required('희망트랙을 선택해주세요.'),
  statement: yup
    .string()
    .min(50, '자기소개는 50자 이상 입력해주세요.')
    .max(1000, '자기소개는 1000자를 넘기지 말아주세요.')
    .required('자기소개를 입력해주세요.'),
});
