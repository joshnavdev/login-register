import React from 'react';
import { Layout } from 'antd';
import 'antd/lib/layout/style';
import Header from '../components/header';
import './Page.less';

const { Footer, Content } = Layout;

const Page = (props) => {
  return (
    <Layout>
      <Header />
      <Content className="content" >
        <div className="content-children" >
          { props.children || 'HOMEEEEEEEEE'}
        </div>
      </Content>
      <Footer className="footer">Pie de pagina</Footer>
    </Layout>
  );
};

export default Page;
