import { useCallback, useMemo } from 'react';

import useSwr from 'swr';
import { GetWebsiteResponse} from 'ts/Website';
import websiteDataMapper from 'utils/mapper/websiteDataMapper';

const useRemoteWebsite = () => {
  const uri = `/user/website`;
  const { data, ...others } = useSwr<GetWebsiteResponse>(uri);

  const transformData = useCallback((data: GetWebsiteResponse) => {
    return {
      ...data,
      data: websiteDataMapper.toLocalMain(data.results),
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

export default useRemoteWebsite;

