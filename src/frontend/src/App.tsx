import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/home';
import SetupPage from './pages/setup';
import Authenticate from './pages/login/Authenticate';
import { AccessTokenWrapper } from '@calimero-network/calimero-client';
import { getNodeUrl } from './utils/node';
import TestPage from './pages/test';

export default function App() {
  return (
    <AccessTokenWrapper getNodeUrl={getNodeUrl}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<SetupPage />} />
          <Route path="/auth" element={<Authenticate />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </BrowserRouter>
    </AccessTokenWrapper>
  );
}
