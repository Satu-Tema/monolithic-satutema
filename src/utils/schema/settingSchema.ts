import { SettingFormValues } from 'ts/schema/settingSchema';
import * as Yup from 'yup';

export const SettingFormSchema: Yup.SchemaOf<SettingFormValues> = Yup.object().shape({
  title: Yup.string().required(),
  address: Yup.string().required(),
  description: Yup.string().required(),
  youtube: Yup.string().required(),
  twitter: Yup.string().required(),
  instagram: Yup.string().required(),
  meta: Yup.string().required(),
  titleHero: Yup.string().required(),
  descriptionHero: Yup.string().required()
});
