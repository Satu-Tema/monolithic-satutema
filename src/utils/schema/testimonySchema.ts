import { TestimonyFormValues } from 'ts/schema/testimonySchema';
import * as Yup from 'yup';

export const TestimonyFormSchema: Yup.SchemaOf<TestimonyFormValues> = Yup.object().shape({
  name: Yup.string().required(),
  jobs: Yup.string().required(),
  description: Yup.string().required(),
});
