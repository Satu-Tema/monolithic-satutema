
export type ThemeRemoteDataType = {
    id: string;
    category: string;
    theme_name: string;
    theme_order: string;
};
  
export type ThemeType = {
    id: string;
    category: string;
    themeName: string;
    themeOrder: string;
}

export type ThemeRemoteData = ThemeRemoteDataType[]
export type Theme = ThemeType[]

export type GetThemeResponse = {
    results: ThemeRemoteData
};

export type GetDetailThemeResponse = {
    results: ThemeRemoteDataType
}
  