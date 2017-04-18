import React from 'react';
import { Menu, Button, Modal } from 'antd';
import { Link } from 'dva/router';
import 'antd/lib/menu/style';
import 'antd/lib/button/style';
import 'antd/lib/modal/style';
import './Nav.less';

const { Item } = Menu;

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };

    this.showModal = this.showModal.bind(this);
  }

  showModal() {
    this.setState({
      visible: true,
    });
  }
  okModal = () => {
    this.setState({
      visible: false,
    });
  }
  cancelModal = () => {
    this.setState({
      visible: false,
    });
  }
  render() {
    return (
      <div>
        <div className="nav-logo">
          <Link to="/">Logo</Link>
        </div>
        <Menu
          className="nav"
          mode="horizontal"
          theme="dark"
          style={{ lineHeight: '64px', float: 'right' }}
        >
          <Item className="login"><Button ghost><Link to="/login">Log In</Link></Button></Item>
          <Modal
            title="Log In" visible={false}
            onOk={this.okModal} onCancel={this.cancelModal}
            okText="OK" cancelText="Cancel"
          >
            <span>asdasdasdas</span>
          </Modal>
          <Item className="logup"><Button ghost><Link to="/logup">Log Up</Link></Button></Item>
        </Menu>
      </div>
    );
  }
}

export default Nav;
