import { ThemeFormValues } from 'ts/schema/themeSchema';
import * as Yup from 'yup';

export const ThemeFormSchema: Yup.SchemaOf<ThemeFormValues> = Yup.object().shape({
  title: Yup.string().required(),
  category: Yup.string().required()
});
