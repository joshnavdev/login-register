import React from 'react';
import { connect } from 'dva';
import { Layout as LayoutAntd } from 'antd';
import 'antd/lib/layout/style';
import Header from '../components/header';
import Footer from '../components/footer';

const { Content } = LayoutAntd;

const App = ({ children }) => {
  return (
    <LayoutAntd className="applayout">
      <Header />
      <Content>
        {children}
      </Content>
      <Footer className="appfooter" />
    </LayoutAntd>
  );
};

export default connect()(App);
