import { useCallback, useMemo } from 'react';

import useSwr from 'swr';
import { GetCategoryResponse } from 'ts/Category';
import categoryDataMapper from 'utils/mapper/categoryDataMapper';

const useRemoteCategory = () => {
  const uri = `/admin/category`;
  const { data, ...others } = useSwr<GetCategoryResponse>(uri);
  
  const transformData = useCallback((data: GetCategoryResponse) => {
    return {
      ...data,
      data: categoryDataMapper.toLocalMainList(data.results),
    };
  }, []);

  const newData = useMemo(() => {
    if (data) {
      return transformData(data);
    }
    return data;
  }, [data, transformData]);

  return useMemo(() => ({ data: newData?.results, ...others }), [newData, others]);
};

export default useRemoteCategory;

