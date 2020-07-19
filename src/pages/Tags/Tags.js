import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setMenuKey } from 'actions/app'
export default () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setMenuKey({
            selectKey: '3'
        }))
    })
    return (
        <div>tags</div>
    )
}