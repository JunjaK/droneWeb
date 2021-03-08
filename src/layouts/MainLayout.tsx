import React, { ReactElement } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from '@/layouts/partials/Header';
import Content from '@/router';
import Footer from '@/layouts/partials/Footer';

export default function MainLayout():ReactElement {
  return (
    <Router>
      <Header />
      <Content />
      <Footer />
    </Router>
  );
}
