export type WebsiteRemoteDataType = {
    id: string;
    theme_id: string;
    is_website: boolean;
    website_name: string;
    content: string;
};
  
export type WebsiteType = {
    id: string;
    themeId: string;
    isWebsite: boolean;
    websiteName: string;
    content: string
}

export type WebsiteRemoteData = WebsiteRemoteDataType[]
export type Website = WebsiteType[]

export type GetWebsiteResponse = {
    results: WebsiteRemoteDataType
};