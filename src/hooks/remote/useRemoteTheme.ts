import { useCallback, useMemo } from 'react';

import useSwr from 'swr';
import { GetThemeResponse } from 'ts/Theme';
import themeDataMapper from 'utils/mapper/themeDataMapper';

const useRemoteTheme = () => {
  const uri = `/theme`;
  const { data, ...others } = useSwr<GetThemeResponse>(uri);
  
  const transformData = useCallback((data: GetThemeResponse) => {
    return {
      ...data,
      data: themeDataMapper.toLocalMainList(data.results),
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

export default useRemoteTheme;

