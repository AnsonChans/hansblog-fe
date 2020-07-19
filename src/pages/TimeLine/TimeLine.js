import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setMenuKey } from 'actions/app'
export default () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setMenuKey({
            selectKey: '2'
        }))
    })
    return (
        <div>TimeLine</div>
    )
}