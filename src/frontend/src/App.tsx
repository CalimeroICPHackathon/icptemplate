import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Dev from './pages/dev';
import SetupPage from './pages/setup';
import Authenticate from './pages/login/Authenticate';
import { AccessTokenWrapper } from '@calimero-network/calimero-client';
import { getNodeUrl } from './utils/node';
import HomePage from './pages/home';

export default function App() {
  return (
    <AccessTokenWrapper getNodeUrl={getNodeUrl}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<SetupPage />} />
          <Route path="/auth" element={<Authenticate />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/test" element={<Dev />} />
        </Routes>
      </BrowserRouter>
    </AccessTokenWrapper>
  );
}
