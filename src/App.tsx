import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/index-routes';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      {/* Browser Router aceitas as rotas que são passadas via url do navegador */}
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
