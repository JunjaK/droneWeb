import React, { useState } from 'react';
import mainLayout from './layouts/mainLayout';

const App:React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div id='App'>
      <span>Hello World</span>
    </div>
  );
};

export default App;
