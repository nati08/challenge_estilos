import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './theme/Global.Styled';

import Loading from '@/components/Loading';
import AppRoutes from '@/routes/AppRoutes';

const App = () => (
  <Suspense fallback={<Loading />}>
    <BrowserRouter basename={import.meta.env.VITE_APP_BASE_URL}>
      <GlobalStyle />
      <AppRoutes />
    </BrowserRouter>
  </Suspense>
);

export default App;
