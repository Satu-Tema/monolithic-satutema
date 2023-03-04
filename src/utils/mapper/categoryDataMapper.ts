import type {
    Category,
    CategoryRemoteData,
    CategoryRemoteDataType,
    CategoryType
  } from 'ts/Category';
  
  interface CategoryDataMapperType {
    toLocalMain: (category: CategoryRemoteDataType) => CategoryType,
    toLocalMainList: (categories: CategoryRemoteData) => Category,
  };
  
  const categoryDataMapper: CategoryDataMapperType = {
    toLocalMain: (category) => ({
        id: category.id,
        titleCategory: category.title_category
    }),
    toLocalMainList: (categories) =>
      categories.map((category) => categoryDataMapper.toLocalMain(category)),
  };
  
  export default categoryDataMapper;
  
  