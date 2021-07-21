import React from 'react'
import { useDispatch } from 'react-redux'
import { activateUsers, deactivateUsers } from '../actions/userActions'
import '../styles/controls.css'

const Controls = (props) => {

    const dispatch = useDispatch()

    const activateAll = () => {
        dispatch(activateUsers())
    }

    const deactivateAll = () => {
        dispatch(deactivateUsers())
    }

    return (
        <div className='control-container'>
            <button className="btn-item-green" onClick={activateAll}>Activate</button>
            <button className="btn-item-red" onClick={deactivateAll}>Deactivate</button>
        </div>
    )
}

export default Controls
