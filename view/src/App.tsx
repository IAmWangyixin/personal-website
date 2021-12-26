import React from 'react';
import './App.css';
import Routers from './routers/routers';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Routers />
    </HashRouter>
  );
}

export default App;
