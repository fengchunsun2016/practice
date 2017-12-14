/**
 * Created by feng on 2017/12/4.
 */


import React from "react";
import {render} from 'react-dom';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

console.log(React,'react');
console.log(window,'window');



render(
  <div>
   <Layout>
    <Header style={{backgroundColor:'#ccc'}}>Header</Header>
    <Layout style={{height:'calc(100vh - 133px)',backgroundColor:'#fff'}}>
     <Content>Content</Content>
     <Sider>Sider</Sider>
    </Layout>
    <Footer>Footer</Footer>
   </Layout>
  </div>,
  document.getElementById('root'));




