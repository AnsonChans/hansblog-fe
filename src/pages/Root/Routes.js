import React from 'react'
import { Switch, Route } from "react-router-dom"
import Index from '../Home/index'
import timeline from '../TimeLine/index'
import tags from '../Tags/index'
import me from '../Me/index'
export default ()=>{
    return (
        <Switch>
            <Route path='/' exact component={Index} />
            <Route path='/timeline' component={timeline} />
            <Route path='/tags' component={tags} />
            <Route path='/me' component={me} />
        </Switch>
    )
}