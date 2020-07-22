import React, { useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { setMenuKey } from 'actions/app'
import { Link, useHistory } from 'react-router-dom'
import { Layout, Menu, Divider, Input, Avatar } from 'antd';
import { SearchOutlined, UserOutlined, HomeOutlined, EditOutlined, TagsOutlined } from '@ant-design/icons'
import styles from './index.module.scss'
// import { useSelector } from 'react-redux'
const { Header } = Layout;

export default () => {
    const history = useHistory()
    // const selectKey =history.location.pathname
    const [selectKey, setSelectKey] = useState('/home')
    useEffect(() => {
        setSelectKey(history.location.pathname === '/' ? '/home' : history.location.pathname)
    }, [history.location.pathname])
    const menuClick = ({ key }) => {
        setSelectKey(key)
    }
    return (
        <Header theme="light" className={styles.app_header}>
            <div className={styles.left}>
                <div className={styles.logo} >
                    Test
                </div>
                <Divider type="vertical" />
                <SearchOutlined />
                <Input
                    className={styles.search_input}
                    placeholder="input search text"
                    // onSearch={value => console.log(value)}
                    style={{ width: 200 }}
                />
            </div>
            <div className={styles.right}>
                <Menu mode="horizontal" defaultSelectedKeys={['/home']} selectedKeys={selectKey} onClick={menuClick}>
                    <Menu.Item key="/home"><Link to="/"><HomeOutlined />首页</Link></Menu.Item>
                    <Menu.Item key="/timeline"><Link to="/timeline"><EditOutlined />归档</Link></Menu.Item>
                    <Menu.Item key="/tags"><Link to="/tags"><TagsOutlined />标签</Link></Menu.Item>
                    <Menu.Item key="/me"><Link to="/me"><UserOutlined />我的</Link></Menu.Item>
                </Menu>
                <Avatar className={styles.avatar} icon={<UserOutlined />} />
            </div>
        </Header>
    )
}