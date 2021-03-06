import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from '@/layouts/partials/Header';
import Content from '@/router';

import Theme from '@/layouts/partials/Theme';

export default function MainLayout():any {
  return (
    <Router>
      <ThemeProvider theme={Theme}>

        <Header />
        <Content />

      </ThemeProvider>
    </Router>
  );
}
