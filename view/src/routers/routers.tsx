import React from 'react';
import { Switch, Route } from 'react-router-dom';
<<<<<<< Updated upstream:view/src/routers/routers.tsx
import Home from '../pages/Home';
import Login from '../pages/login/login';
import IndexLayout from '../layout/IndexLayout';
import PersonalDataView from '../pages/personal/PersonalDataView';
import PersonalPlan from '../pages/personal/PersonalPlan';
import PersonalKnowledge from '../pages/personal/PersonalKnowledge';
import CreateBlog from '../pages/blog/CreateBlog';
import ManageBlog from '../pages/blog/ManageBlog';
import BlogList from '../pages/blog/BlogList';
import BlogDetail from '../pages/blog/BlogDetail';
import { UserContextProvider } from '../context/userContext';
=======
import Home from './pages/Home';
import IndexLayout from './layout/IndexLayout';
import PersonalDataView from './pages/personal/PersonalDataView';
import PersonalPlan from './pages/personal/PersonalPlan';
import PersonalKnowledge from './pages/personal/PersonalKnowledge';
import CreateBlog from './pages/blog/CreateBlog';
import ManageBlog from './pages/blog/ManageBlog';
import BlogList from './pages/blog/BlogList';
import Tools from './pages/personal/Tools';
>>>>>>> Stashed changes:view/src/routers.tsx

const renderComponentWithLayout = (Layout: React.FC, Component: React.FC) => (
  <UserContextProvider>
    <Layout>
      <Component />
    </Layout>
  </UserContextProvider>
);

const routes = [
  {
    path: '/',
    exact: true,
    // component: Home,
    component: () => renderComponentWithLayout(IndexLayout, BlogList),
  },
  {
    path: '/login',
    exact: true,
    component: Login,
  },
  {
    path: '/blog/create',
    exact: true,
    component: () => renderComponentWithLayout(IndexLayout, CreateBlog),
  },
  {
    path: '/blog/manage',
    exact: true,
    component: () => renderComponentWithLayout(IndexLayout, ManageBlog),
  },
  {
    path: '/blog/list',
    exact: true,
    component: () => renderComponentWithLayout(IndexLayout, BlogList),
  },
  {
    path: '/blog/detail',
    exact: true,
    component: BlogDetail,
  },
  {
    path: '/personal/data',
    exact: true,
    component: () => renderComponentWithLayout(IndexLayout, PersonalDataView),
  },
  {
    path: '/personal/plan',
    exact: true,
    component: () => renderComponentWithLayout(IndexLayout, PersonalPlan),
  },
  {
    path: '/personal/knowledge',
    exact: true,
    component: () => renderComponentWithLayout(IndexLayout, PersonalKnowledge),
  },
  {
    path: '/personal/Tools',
    exact: true,
    component: () => renderComponentWithLayout(IndexLayout, Tools),
  },
];

const Routers: React.FC = () => {
  return (
    <Switch>
      {routes.map((item) => (
        <Route
          key={item.path}
          path={item.path}
          exact={item.exact}
          render={() => <item.component />}
        />
      ))}
    </Switch>
  );
};

export default Routers;
