import Home from '@/views/Home';
import TodoPage from '@/views/system/TodoPage';
import Page404 from '@/views/system/404';

/* test */
import DynamicRoute from '@/views/test/DynamicRoute';
import DynamicRouteList from '@/views/test/DynamicRouteList';

export default [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/database',
    component: TodoPage,
  },
  {
    path: '/analytics',
    component: TodoPage,
  },
  {
    path: '/test',
    component: DynamicRouteList,
  },
  {
    path: '/test/:id',
    component: DynamicRoute,
  },
  {
    path: '*',
    component: Page404,
  },
];
