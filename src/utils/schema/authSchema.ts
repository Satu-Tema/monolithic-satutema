import * as Yup from 'yup';
import { LoginFormValues } from 'ts/schema/authSchema';

export const LoginFormSchema: Yup.SchemaOf<LoginFormValues> = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().required(),
});
