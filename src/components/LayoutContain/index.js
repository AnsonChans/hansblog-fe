import React from 'react'
import { Layout } from 'antd';
import Header from 'components/Header'
import Content from 'components/Content'
const { Footer } = Layout;
export default () => {
    return (
        <Layout style={{ height: '100%' }}>
            <Header />
            <Content/>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    )
}