import React from 'react';
import Routes from './Routes';
import ErrorBoundary from './ErrorBoundary';

const App = () => (
  <ErrorBoundary>
    <Routes />
  </ErrorBoundary>
);

export default App;
