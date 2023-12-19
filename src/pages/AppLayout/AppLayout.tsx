import React from 'react';
import { Outlet } from 'react-router-dom';

const AppLayout = (): React.ReactElement => (
  <div>
    {/* app nav goes here */}
    <div>1234</div>
    <Outlet />
  </div>
);

AppLayout.displayName = 'AppLayout';

export default AppLayout;
