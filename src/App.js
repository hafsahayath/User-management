import React from 'react'
import UserContainer from './components/UserContainer'

const App = (props) => {
    return (
        <div>
            <h1 style={{textAlign:'center', margin:'30px', paddingBottom:'20px', color:'#444AB2'}}>User Management</h1>
            <UserContainer />
        </div>
    )
}

export default App