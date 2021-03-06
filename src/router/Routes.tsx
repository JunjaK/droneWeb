import Main from '@/views/Main';
import Page404 from '@/views/system/404';

export default [
  {
    path: '/',
    component: Main,
  },
  {
    path: '*',
    component: Page404,
  },
];
