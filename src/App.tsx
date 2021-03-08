import React, { useState } from 'react';
import Some from '@/views/test/TypescriptPrac';
import Theme from '@/layouts/partials/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import MainLayout from './layouts/MainLayout';

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={Theme}>
      <MainLayout />
      <Some />
    </ThemeProvider>
  );
};

export default App;
