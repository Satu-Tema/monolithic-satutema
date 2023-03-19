import { FeatureFormValues } from 'ts/schema/featureSchema';
import * as Yup from 'yup';

export const FeatureFormSchema: Yup.SchemaOf<FeatureFormValues> = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string().required(),
});
