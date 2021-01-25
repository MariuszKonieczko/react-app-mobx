import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const items = [
  { text: 'Buy grocery', done: true },
  { text: 'Play guitar', done: false },
  { text: 'Romantic dinner', done: false },
];

ReactDOM.render(
  <React.StrictMode>
    <App items={items} />
  </React.StrictMode>,
  document.getElementById('root')
);
