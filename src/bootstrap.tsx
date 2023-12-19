import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from 'components/App';
import { setupStore } from 'store/store';

const HTMLRootElement = document.getElementById('root') as HTMLElement;

const root = createRoot(HTMLRootElement);

const { store } = setupStore();

const Application = (
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

root.render(Application);
