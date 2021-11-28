import React, { useCallback } from 'react';
import { Layout, Menu } from 'antd';
import { FormOutlined, NotificationOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';

const { SubMenu } = Menu;
const { Sider } = Layout;

const menus = [
  {
    key: 'blog',
    icon: <FormOutlined />,
    title: '个人博客',
    subMenus: [
      {
        key: 'home',
        content: 'Home',
        path: '/',
      },
      {
        key: 'blogCreate',
        content: '创建博客',
        path: '/blog/create',
      },
      {
        key: 'blogList',
        content: '博客列表',
        path: '/blog/list',
      },
      {
        key: 'blogManage',
        content: '博客管理',
        path: '/blog/manage',
      },
    ],
  },
  {
    key: 'personal',
    icon: <NotificationOutlined />,
    title: '个人中心',
    subMenus: [
      {
        key: 'personalDataView',
        content: '数据总览',
        path: '/personal/data',
      },
      {
        key: 'personalPlan',
        content: '计划管理',
        path: '/personal/plan',
      },
      {
        key: 'personalKnowledge',
        content: '知识图谱',
        path: '/personal/knowledge',
      },
    ],
  },
];

const Nav: React.FC = (props: any) => {
  const { location, history } = props;
  const selectMenuInfo = (() => {
    const { pathname } = location;
    const selectOpenMenu = menus.filter((menu, index) => {
      if (pathname === '/' && index === 0) {
        return true;
      }
      return pathname.indexOf(menu.key) > 0;
    })[0];

    const selectSubMenu = selectOpenMenu.subMenus.filter(
      (subMenu) => pathname === subMenu.path
    );
    return {
      ...selectOpenMenu,
      subMenus: [...selectSubMenu],
    };
  })();

  const handleClickMenuItem = useCallback((subMenu) => {
    history.push(subMenu.path);
  }, []);
  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={[selectMenuInfo.subMenus[0].key]}
        defaultOpenKeys={[selectMenuInfo.key]}
        style={{ height: '100%', borderRight: 0 }}
      >
        {menus.map((menu) => (
          <SubMenu key={menu.key} icon={menu.icon} title={menu.title}>
            {menu.subMenus.map((subMenu) => (
              <Menu.Item
                key={subMenu.key}
                onClick={() => handleClickMenuItem(subMenu)}
              >
                {subMenu.content}
              </Menu.Item>
            ))}
          </SubMenu>
        ))}
      </Menu>
    </Sider>
  );
};

export default withRouter(Nav);
