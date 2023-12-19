import React, { ReactElement } from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from 'router/config';

const App = (): ReactElement => (
  /* Additional providers goes here. ex: StyleProvider, SnackbarProvider e.t.c */

  <RouterProvider router={router} />
);

App.displayName = 'App';

export default App;
