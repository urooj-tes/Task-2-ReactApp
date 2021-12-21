import React from 'react';
import {NavLink} from 'react-router-dom';
import { Layout, Menu} from 'antd';
import './index.css';
import 'antd/dist/antd.css';
import My_Form from './My_Form';
import About from './About';
import Contacts from './Contacts';
import Events from './Events';
import News from './News';
import Error from './Error';
import {Route, Routes} from 'react-router-dom';

const { SubMenu } = Menu;
const { Header,Content, Sider } = Layout;

const Navigation = () =>{
 return (
     <>
        <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      <h1 style={{color: 'White'}}>Hello!</h1>
        
      </Menu>
    </Header>
   <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          style={{ height: '100%', borderRight: 0 }}
        >
          <NavLink to='/'><SubMenu title="Form"></SubMenu></NavLink>
          <NavLink to= '/News'><SubMenu title="News"></SubMenu></NavLink>
          <NavLink to= '/About'><SubMenu title="About Us"></SubMenu></NavLink>
          <NavLink to= '/Contacts'><SubMenu title="Contact Us"></SubMenu></NavLink>
          <NavLink to= '/Events'><SubMenu title="Events"></SubMenu></NavLink>
          <SubMenu title="Services"></SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
      <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
         <Routes>
            <Route exact path="/" element={<My_Form/>} />
            <Route exact path="/Contacts" element={<Contacts />} />
            <Route exact path="/About" element={<About />} />
            <Route exact path="/Events" element={<Events />} />
            <Route exact path="/News" element={<News />} />
            <Route  element={<Error />} />
        </Routes>
        </Content>
      </Layout>
    </Layout>
  </Layout>
     </>
 );
}

export default Navigation;