import React, { useState } from 'react';
import Some from '@/views/test/TypescriptPrac';
import MainLayout from './layouts/MainLayout';

const App:React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div id='App'>
      <MainLayout />
      <Some />
    </div>
  );
};

export default App;
