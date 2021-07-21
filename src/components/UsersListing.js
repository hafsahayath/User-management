import React,{ useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleStatusUser, removeUser } from '../actions/userActions'
import '../styles/usersListing.css'

const UsersListing = (props) => {
    const users = useSelector(state=>state.users)
    
    const [search, setSearch]=useState('')
    const [localUsers, setLocalUsers] = useState(users)

    useEffect(()=>{
        if(search===''){
            setLocalUsers(users)
        } else {
            const res = users.filter(ele=>{
                return ele.name.toLowerCase().includes(search.trim().toLowerCase())
            })
            setLocalUsers(res)
        }
    },[users, search])

    const dispatch = useDispatch()
    
    const activate = (id) => {
        dispatch(toggleStatusUser(id))
    }

    const deleteUser = (id) => {
        dispatch(removeUser(id))
    }

    return (
        <div className='users-listing-main-container'>  
            <div className='search-list-container'>
                <h2>Listing Users - {localUsers.length}</h2>
                <input type="text" placeholder="search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
            </div>        
            {localUsers.map((ele, i)=>{
                return (
                    <div key={i} className={ele.status ? "active" : "inactive"}>
                        <div className="user-item" key={ele.id}>
                            <input type="checkbox" checked={ele.status} onChange={()=>activate(ele.id)}/>
                            <h3>{ele.name}</h3>
                            <button onClick={()=>deleteUser(ele.id)}><i style={{cursor:'pointer'}} className="fas fa-minus-circle fa-lg"></i></button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default UsersListing
