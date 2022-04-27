import * as yup from 'yup';

export const sign_in_schema = yup.object({
  name: yup
    .string()
    .matches(/^[가-힣]+$/gi, '올바른 이름을 입력해주세요.')
    .min(2, '이름은 2자 이상 입력해주세요.')
    .required('이름을 입력해주세요.'),
  email: yup.string().email('올바른 이메일을 입력해주세요.').required('이메일을 입력해주세요.'),
});
