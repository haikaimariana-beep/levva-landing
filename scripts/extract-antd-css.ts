// Gera public/antd-static.css com TODO o CSS que o antd (via @ant-design/cssinjs)
// injetaria em runtime, já computado com o tema real do site.
//
// Por que isso existe: o antd injeta <style> dinamicamente no <head> em tempo de
// execução (CSS-in-JS). Isso exige 'unsafe-inline' em style-src na CSP. Extraindo
// o CSS em build-time e servindo como arquivo estático (<link>, coberto por
// style-src 'self'), a página funciona com uma CSP restritiva, sem 'unsafe-inline'.
//
// Rodar com: npm run extract:antd-css (roda automaticamente antes do build — ver
// o script "build" no package.json).
//
// Nota sobre o tema: reconstrói aqui o mesmo ThemeConfig de src/theme/antdTheme.ts
// (em vez de importar aquele arquivo direto) porque este script roda com o
// carregador nativo de TS do Node, que exige extensão explícita em import relativo
// e não segue a mesma resolução de módulos do Vite/tsconfig do projeto. Os valores
// em si (cores, raio, fonte) continuam vindo de uma única fonte: src/theme/tokens.ts.
// Se src/theme/antdTheme.ts mudar de estrutura (não só de valores), replicar a
// mudança aqui também.

import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { createElement } from 'react';
import { ConfigProvider, theme, type ThemeConfig } from 'antd';
import { extractStyle } from '@ant-design/static-style-extract';
import { tokens } from '../src/theme/tokens.ts';

const antdTheme: ThemeConfig = {
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

const __dirname = dirname(fileURLToPath(import.meta.url));

const css = extractStyle({
  customTheme: (node) => createElement(ConfigProvider, { theme: antdTheme }, node),
  // Só os componentes antd realmente usados no site (ver grep em src/) — evita
  // baixar CSS de dezenas de componentes do antd que a LP nunca renderiza.
  includes: ['Button', 'Card', 'Drawer', 'Form', 'Input'],
});

const outDir = resolve(__dirname, '..', 'public');
mkdirSync(outDir, { recursive: true });
const outFile = resolve(outDir, 'antd-static.css');
writeFileSync(outFile, css, 'utf-8');

console.log(`[extract-antd-css] ${css.length} bytes escritos em public/antd-static.css`);
if (css.length < 500) {
  console.warn(
    '[extract-antd-css] AVISO: CSS gerado parece pequeno demais — confira antes de publicar.',
  );
  process.exitCode = 1;
}
