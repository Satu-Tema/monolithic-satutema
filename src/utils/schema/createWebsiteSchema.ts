import { CreateWebsiteFormValues } from 'ts/schema/createWebsiteSchema';
import * as Yup from 'yup';

export const CreateWebsiteFormSchema: Yup.SchemaOf<CreateWebsiteFormValues> = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string().required(),
  address: Yup.string().required(),
  meta: Yup.string().required()
});
