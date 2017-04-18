import React from 'react';
import { Layout } from 'antd';
import 'antd/lib/layout/style';
import Nav from './Nav';
import './Page.less';

const { Header, Footer, Content } = Layout;

const Page = (props) => {
  return (
    <Layout>
      <Header className="header">
        <Nav />
      </Header>
      <Content className="content" >
        <div className="content-children" >
        HOmeeeeeeeeeeeeee
          { props.children }
        </div>
      </Content>
      <Footer className="footer">Pie de pagina</Footer>
    </Layout>
  );
};

export default Page;
