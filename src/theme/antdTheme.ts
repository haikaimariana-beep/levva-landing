import { theme, type ThemeConfig } from 'antd';
import { tokens } from './tokens';

export const antdTheme: ThemeConfig = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorPrimary: tokens.color.ink,
    colorBgBase: tokens.color.white,
    colorText: tokens.color.ink,
    colorTextSecondary: tokens.color.textMuted,
    colorBorder: tokens.color.creamBorder,
    colorError: tokens.color.error,
    colorSuccess: tokens.color.success,
    colorWarning: tokens.color.warning,
    borderRadius: tokens.radius.pill,
    borderRadiusLG: tokens.radius.card,
    fontFamily: tokens.font.family,
    controlHeightLG: 52,
  },
  components: {
    Button: { primaryColor: tokens.color.white, fontWeight: 600 },
    Card: { borderRadiusLG: tokens.radius.card },
    Input: { borderRadius: tokens.radius.pill },
  },
};
