import Form from './Form';
import List from './List';
import React from 'react';
import StoreProvider from './store/StoreProvider';

const App = () => {
  return (
    <StoreProvider>
      <h1>Opinons about our the latest book "React" by JACK JACK</h1>
      <List />
      <Form />
    </StoreProvider>
  );
};

export default App;
