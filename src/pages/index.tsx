import React, { Component, useContext } from 'react';
import './index.less';
import axios from 'axios'
import { Layout, Menu, Button, Tooltip, Input } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PictureFilled,
  BookOutlined,
  SmileOutlined,
  MessageOutlined,
} from '@ant-design/icons';
import { Link } from 'umi';
import { SearchOutlined } from '@ant-design/icons';
import logo from '../../public/img/logo.png';
// import {text} from '../../public/store/store'
const { Header, Sider, Content } = Layout;

export default class index extends Component<any, any> {
  state = {
    collapsed: false,
    // myInput: ''
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const selectedKeys = this.props.location.pathname;
    // const ctx = useContext(text)


    return (
      <Layout className="layout">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <Menu theme="dark" mode="inline" selectedKeys={selectedKeys}>
            <Menu.Item key="/pic" icon={<PictureFilled />}>
              <Link to="/pic"> 图片 </Link>
            </Menu.Item>
            <Menu.Item key="/head" icon={<BookOutlined />}>
              <Link to="/head"> 头条 </Link>
            </Menu.Item>
            <Menu.Item key="/joke" icon={<SmileOutlined />}>
              <Link to="/joke"> 笑话 </Link>
            </Menu.Item>
            <Menu.Item key="/author" icon={<MessageOutlined />}>
              <Link to="/author"> 作者的话 </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: this.toggle,
              },
            )}
           <span className="tishi"> -----点击可收起</span>
            {JSON.parse(localStorage.getItem('tianqi'))?null:<div className="tianqi">
              <Input
                placeholder="输入您的城市获取天气"
                style={{ width: '200px' }}
                ref={input => {
                  this.myInput = input;
                }}
              />

              <Button
                onClick={() => {
                  console.log(this.myInput.state.value);
                  axios.get('/tianqi?city='+ this.myInput.state.value +'&key=512acb41529461a9f84d48676312f56b').then((res)=>{
                    console.log(res.data.result.realtime.info);
                    localStorage.setItem('city',JSON.stringify(this.myInput.state.value));
                    localStorage.setItem('tianqi',JSON.stringify(res.data.result.realtime.info));
                    console.log(JSON.parse(localStorage.getItem('tianqi')));
                    location.reload()
                    
                    
                  })

                }}
                type="dashed"
                icon={<SearchOutlined />}
                className="btn"
              >
                Search
              </Button>
            </div>}
            {/* {ctx} */}
            <div className="tianqi">
                
                <span className="city">{JSON.parse(localStorage.getItem('city'))}</span>
                <span className="tianqi">{JSON.parse(localStorage.getItem('tianqi'))}</span>
               
            </div>
            
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
