import React from 'react';
import './App.css';

const App = () => {
  const ativo = true;
  return <p className={ativo ? 'ativo' : 'inativo'}>Estoque</p>;
};

export default App;
