import React from 'react'
import { useSelector } from 'react-redux'
import Form from './Form'
import UsersListing from './UsersListing'
import Controls from './Controls'
import '../styles/userContainer.css'

const UserContainer = (props) => {
    const users = useSelector(state=>state.users)
    
    return (
        <div className='main-user-container'>
            <Form />
            {
                users.length>0 && (
                    <>
                        <Controls />
                        <UsersListing />
                    </>
                )
            }
        </div>
    )
}

export default UserContainer
