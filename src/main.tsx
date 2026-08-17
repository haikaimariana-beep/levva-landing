import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider } from 'antd';
import { antdTheme } from './theme/antdTheme';
import { initDataLayer } from './lib/track';
import { SmoothScrollProvider } from './lib/motion/SmoothScrollProvider';
import './theme/global.css';
import App from './App';

initDataLayer();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider theme={antdTheme}>
      <SmoothScrollProvider>
        <App />
      </SmoothScrollProvider>
    </ConfigProvider>
  </StrictMode>,
);
