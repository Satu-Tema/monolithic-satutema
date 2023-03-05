
export type ThemeRemoteDataType = {
    id: string;
    category: string;
    theme_name: string;
};
  
export type ThemeType = {
    id: string;
    category: string;
    themeName: string;
}

export type ThemeRemoteData = ThemeRemoteDataType[]
export type Theme = ThemeType[]

export type GetThemeResponse = {
    results: ThemeRemoteData
};
  