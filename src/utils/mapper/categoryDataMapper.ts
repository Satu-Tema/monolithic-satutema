import type {
    Category,
    CategoryRemoteData,
    CategoryRemoteDataType,
    CategoryType
  } from 'ts/Category';
import { Option } from 'ts/Option';
  
  interface CategoryDataMapperType {
    toLocalMain: (category: CategoryRemoteDataType) => CategoryType,
    toLocalMainList: (categories: CategoryRemoteData) => Category,
    toLocalListOptions: (categories: CategoryRemoteData) => Option<string>[]
  };
  
  const categoryDataMapper: CategoryDataMapperType = {
    toLocalMain: (category) => ({
        id: category.id,
        titleCategory: category.title_category
    }),
    toLocalMainList: (categories) =>
      categories.map((category) => categoryDataMapper.toLocalMain(category)),
    toLocalListOptions: (categories) => categories.map((category) => ({
      label: category.title_category,
      value: category.title_category
    }))
  };
  
  export default categoryDataMapper;
  
  