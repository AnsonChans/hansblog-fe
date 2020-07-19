import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import {useSelector} from 'react-redux'
const { Header, Content, Footer } = Layout;

export default ({component=null}) => {
    const selectKey = useSelector((state)=>state.layout.selectKey)
    return (
        <Layout style={{ height: '100%' }}>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} selectedKeys={selectKey}>
                    <Menu.Item key="1"><Link to="/">首页</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/timeline">归档</Link></Menu.Item>
                    <Menu.Item key="3"><Link to="/tags">标签</Link></Menu.Item>
                    <Menu.Item key="4"><Link to="/me">我的</Link></Menu.Item>
                </Menu>
            </Header>
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                    {component}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    )
}