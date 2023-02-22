import { CategoryFormValues } from 'ts/schema/categorySchema';
import * as Yup from 'yup';

export const CategoryFormSchema: Yup.SchemaOf<CategoryFormValues> = Yup.object().shape({
  title: Yup.string().required()
});
