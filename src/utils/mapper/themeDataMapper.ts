import type { Theme, ThemeRemoteData, ThemeRemoteDataType, ThemeType } from 'ts/Theme';
  
  interface ThemeDataMapperType {
    toLocalMain: (theme: ThemeRemoteDataType) => ThemeType,
    toLocalMainList: (themes: ThemeRemoteData) => Theme,
  };
  
  const themeDataMapper: ThemeDataMapperType = {
    toLocalMain: (theme) => ({
        id: theme.id,
        category: theme.category,
        themeName: theme.theme_name,
        themeOrder: theme.theme_order,
    }),
    toLocalMainList: (themes) =>
      themes.map((theme) => themeDataMapper.toLocalMain(theme)),
  };
  
  export default themeDataMapper;
  
  