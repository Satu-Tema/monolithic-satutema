import { useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import useSwr from 'swr';
import { GetDetailThemeResponse, GetThemeResponse } from 'ts/Theme';
import themeDataMapper from 'utils/mapper/themeDataMapper';

const useRemoteDetailTheme = () => {
  const { id } = useParams()
  const uri = `/admin/theme/${id}`;
  const { data, ...others } = useSwr<GetDetailThemeResponse>(uri);
  
  const transformData = useCallback((data: GetDetailThemeResponse) => {
    return {
      ...data,
      data: themeDataMapper.toLocalMain(data.results),
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

export default useRemoteDetailTheme;

