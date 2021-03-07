import React, { ReactElement } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from '@/layouts/partials/Header';
import Content from '@/router';

import Theme from '@/layouts/partials/theme';

export default function MainLayout():ReactElement {
  return (
    <Router>
      <ThemeProvider theme={Theme}>

        <Header />
        <Content />

      </ThemeProvider>
    </Router>
  );
}
