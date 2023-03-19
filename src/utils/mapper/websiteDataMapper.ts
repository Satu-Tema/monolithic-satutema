import { Website, WebsiteRemoteData, WebsiteRemoteDataType, WebsiteType } from 'ts/Website';
  
interface WebsiteDataMapperType {
  toLocalMain: (website: WebsiteRemoteDataType) => WebsiteType,
  toLocalMainList: (websites: WebsiteRemoteData) => Website
};

const websiteDataMapper: WebsiteDataMapperType = {
  toLocalMain: (website) => ({
      id: website.id,
      content: website.content,
      isWebsite: website.is_website,
      themeId: website.theme_id,
      websiteName: website.website_name
  }),
  toLocalMainList: (websites) => websites.map((web) => websiteDataMapper.toLocalMain(web)),
};

export default websiteDataMapper;

