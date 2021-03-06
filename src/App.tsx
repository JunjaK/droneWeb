import React, { useState } from 'react';
import MainLayout from './layouts/MainLayout';

const App:React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div id='App'>
      <MainLayout />
    </div>
  );
};

export default App;
