import {useFormik} from 'formik';

import Button from 'components/button';
import Input from 'components/input';

import {auth_schema} from 'validators';

import * as S from './style';

interface AuthFormProps {
  onSubmit: () => void;
}

function Auth({onSubmit}: AuthFormProps) {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    validationSchema: auth_schema,
    onSubmit: data => {
      onSubmit();
      console.log(data);
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
      <Button text="입력" variant="small" type="submit" />
    </S.Container>
  );
}

export default Auth;
