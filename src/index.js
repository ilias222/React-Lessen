import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App"

// Найти элемент с ИД - роот, срендерить вставку файла Апп
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

