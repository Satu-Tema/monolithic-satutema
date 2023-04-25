import { ProductFormValues } from 'ts/schema/productSchema';
import * as Yup from 'yup';

export const ProductFormSchema: Yup.SchemaOf<ProductFormValues> = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string().required(),
});`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                `
