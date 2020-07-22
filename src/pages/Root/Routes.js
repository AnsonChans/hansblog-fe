import React from 'react'
import { Switch, Route } from "react-router-dom"
import LayoutContain from 'components/LayoutContain'
export default () => {
    return (
        <Switch>
            <Route component={LayoutContain} />
        </Switch>
    )
}