import React,{ useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../actions/userActions'
import '../styles/form.css'

const Form = (props) => {
    const [name, setName] = useState('')
    const [status, setStatus] = useState(false)

    const dispatch = useDispatch()

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleActiveChange = (e) => {
        setStatus(e.target.checked)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            id: Number(new Date()),
            name: name,
            status: status
        }
        if(formData.name){
            dispatch(addUser(formData))
            setName('')
            setStatus(false)
        } else {
            alert('name field cannot be empty')
            setStatus(false)
        }
    }

    return (
        <div className='form-main-container'>
            <form className='form-control' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" value={name} onChange={handleNameChange}/>
                </div>
                <div className='checkbox-container'>
                    <input type="checkbox" name="active" checked={status} onChange={handleActiveChange}/> 
                    <label>active</label>
                </div>
                <input type="submit" className='btn'/>
            </form>
        </div>
    )
}

export default Form