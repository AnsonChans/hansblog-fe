import React from 'react'
import { Layout } from 'antd'
import Home from 'pages/Home'
import Me from 'pages/Me'
import Tags from 'pages/Tags'
import TimeLine from 'pages/TimeLine'
import { Switch, Route } from 'react-router-dom'
const { Content } = Layout
export default () => {
    return (
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/timeline' exact component={TimeLine} />
                    <Route path='/tags' exact component={Tags} />
                    <Route path='/me' exact component={Me} />
                </Switch>
            </div>
        </Content>
    )
}