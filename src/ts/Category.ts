
export type CategoryRemoteDataType = {
    id: string;
    title_category: string;
};
  
export type CategoryType = {
    id: string;
    titleCategory: string;
}

export type CategoryRemoteData = CategoryRemoteDataType[]
export type Category = CategoryType[]

export type GetCategoryResponse = {
    results: CategoryRemoteData
};
  