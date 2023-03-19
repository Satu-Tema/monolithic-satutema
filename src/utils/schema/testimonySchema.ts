import { TestimonyFormValues } from 'ts/schema/testimonySchema';
import * as Yup from 'yup';

export const TestimonyFormSchema: Yup.SchemaOf<TestimonyFormValues> = Yup.object().shape({
  title: Yup.string().required(),
  subTitle: Yup.string().required(),
  description: Yup.string().required(),
});
