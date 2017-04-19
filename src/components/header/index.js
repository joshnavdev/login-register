import React from 'react';
import { Menu, Button, Layout } from 'antd';
import { Link } from 'dva/router';
import 'antd/lib/menu/style';
import 'antd/lib/button/style';
import 'antd/lib/layout/style';
import './index.less';

const { Item } = Menu;
const HeaderAntd = Layout.Header;
// class Nav extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       visible: false,
//     };

//     this.showModal = this.showModal.bind(this);
//   }

//   showModal() {
//     this.setState({
//       visible: true,
//     });
//   }
//   okModal = () => {
//     this.setState({
//       visible: false,
//     });
//   }
//   cancelModal = () => {
//     this.setState({
//       visible: false,
//     });
//   }
//   render() {
//     return (
//       <div className="navigator">
//         <div className="nav-logo" />
//         <div>
//           <Menu
//             className="nav"
//             mode="horizontal"
//             theme="dark"
//             style={{ lineHeight: '64px', float: 'right' }}
//           >
//             <Item className="login"><Button ghost><Link to="/login">Log In</Link></Button></Item>
//             <Modal
//               title="Log In" visible={false}
//               onOk={this.okModal} onCancel={this.cancelModal}
//               okText="OK" cancelText="Cancel"
//             >
//               <span>asdasdasdas</span>
//             </Modal>
//             <Item className="logup"><Button ghost><Link to="/logup">Log Up</Link></Button></Item>
//           </Menu>
//         </div>
//       </div>
//     );
//   }
// }
const Header = () => {
  return (
    <HeaderAntd className="fixedHeader" >
      <Link to="/" className="logoapp" />
      <Menu theme="dark" mode="horizontal" className="headermenu" >
        <Item className="headerlogin"><Button ghost><Link to="/login">Log In</Link></Button></Item>
        <Item className="headerregister"><Button ghost><Link to="/register">Log Up</Link></Button></Item>
      </Menu>
    </HeaderAntd>
  );
};

export default Header;
