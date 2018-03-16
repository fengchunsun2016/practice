/**
 * Created by feng on 2017/12/4.
 */
import React from "react";
import {render} from 'react-dom';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;






render(
  <div>
    <Layout>
      <Header style={{backgroundColor:'#ccc'}}>Header</Header>
      <Layout style={{height:'calc(100vh - 133px)',backgroundColor:'#fff'}}>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  </div>,
  document.getElementById('root'));
